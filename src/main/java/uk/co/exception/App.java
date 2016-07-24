package uk.co.exception;


import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import uk.co.exception.configuration.AppConfiguration;
import uk.co.exception.resources.ExcetionHandlerResource;

public class App extends Application<AppConfiguration> {

    public static void main(String... args) throws Exception {
        new App().run(args);
    }

    public void initialize(Bootstrap<AppConfiguration> bootstrap) {

        bootstrap.addBundle(new AssetsBundle("/assets", "/assets"));
        bootstrap.addBundle(new ViewBundle());
    }

    @Override
    public void run(AppConfiguration configuration, Environment environment) throws Exception {
        environment.jersey().register(ExcetionHandlerResource.class);
        environment.jersey().register(MultiPartFeature.class);

    }
}
