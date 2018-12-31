package uk.co.exception.resources;

import com.mongodb.Block;
import com.mongodb.MongoClient;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import io.dropwizard.views.View;
import org.bson.Document;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import uk.co.exception.model.ExceptionPerSystem;
import uk.co.exception.model.ExceptionRecord;
import uk.co.exception.views.ExceptionDetailsView;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

import static java.util.Arrays.asList;

@Path("/")
public class ExcetionHandlerResource {

    private MongoClient mongoClient;


    public ExcetionHandlerResource() {

        setUpMongo();
    }

    private void setUpMongo() {
        this.mongoClient = new MongoClient("Rahul85", 27017); //Check the hostname for the Mongo. Here I am using Rahul85. Port is always 27017

    }


    /**
     * This end-point takes a query parameter 'type' to decide if the exception report needs to be shown in table or graphical
     * manner.
     * */

    @GET
    @Path("/get-report")
    @Produces(MediaType.TEXT_HTML)
    public ExceptionDetailsView getReportPage(@QueryParam("type") String type)
    {
        if(type.equalsIgnoreCase("tabular")){
            return getExceptionHomePage();

        } else {
            final List<ExceptionPerSystem> exceptionPerSystemList = getExceptionPerSystemsList();

            ExceptionDetailsView exceptionDetailsView = new ExceptionDetailsView("chart-view.ftl");
            exceptionDetailsView.setExceptionPerSystemsList(exceptionPerSystemList);
            return exceptionDetailsView;
        }
    }

    /**
     * This end-point is used to get the exception home default view which representst the exception details from all the
     * Systems in tabular manner.
     * */

    @GET
    @Path("/exception-home")
    @Produces(MediaType.TEXT_HTML)
    public ExceptionDetailsView getExceptionHomePage() {

        List<ExceptionRecord> exceptionRecordList = getExceptionRecordList();

        ExceptionDetailsView exceptionDetailsView = new ExceptionDetailsView("data-table.ftl");
        exceptionDetailsView.setExceptionRecordList(exceptionRecordList);

        return exceptionDetailsView;
    }

    /**
     * Use this end point for upload the excel sheet with exceptions. File can be read here and then the content can be
     * saved to Mongo.
     * */
    @POST
    @Path("/upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response uploadFile(
            @FormDataParam("file") InputStream uploadedInputStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail) {


        return Response.status(200).build();

    }

    private List<ExceptionRecord> getExceptionRecordList() {
        MongoDatabase masterException = mongoClient.getDatabase("MasterException"); // Database

        MongoCollection<Document> exceptionCollection = masterException.getCollection("ExceptionCollection"); // Collection

        FindIterable<Document> documents = exceptionCollection.find();

        List<ExceptionRecord> exceptionRecordList = new ArrayList<>();


        for (Document document : documents) {
            ExceptionRecord exceptionRecord = new ExceptionRecord();
            exceptionRecord.setSystem(document.getString("system"));
            exceptionRecord.setException(document.getString("exception"));
            exceptionRecord.setExceptionDetails(document.getString("exceptionDetails"));
            exceptionRecord.setCriticality(document.getString("criticality"));
            exceptionRecordList.add(exceptionRecord);
        }
        return exceptionRecordList;
    }


    private List<ExceptionPerSystem> getExceptionPerSystemsList() {
        MongoDatabase masterException = mongoClient.getDatabase("MasterException");

        AggregateIterable<Document> iterable = masterException.getCollection("ExceptionCollection").aggregate(asList(
                new Document("$group", new Document("_id", "$system").append("count", new Document("$sum", 1)))));

        final List<ExceptionPerSystem> exceptionPerSystemList = new ArrayList<>();

        iterable.forEach(new Block<Document>() {
            @Override
            public void apply(final Document document) {
                ExceptionPerSystem exceptionPerSystem = new ExceptionPerSystem();
                exceptionPerSystem.setSystem(document.getString("_id"));
                exceptionPerSystem.setExceptionCount(document.getInteger("count"));
                exceptionPerSystemList.add(exceptionPerSystem);
            }
        });
        return exceptionPerSystemList;
    }

}
