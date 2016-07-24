package uk.co.exception.views;

import io.dropwizard.views.View;
import uk.co.exception.model.ExceptionPerSystem;
import uk.co.exception.model.ExceptionRecord;

import java.util.List;

public class ExceptionDetailsView extends View {

    private String mainSection;
    private List<ExceptionRecord> exceptionRecordList;
    private List<ExceptionPerSystem> exceptionPerSystemsList;

  /*  public CommonView() {
        super("/templates/common-page.ftl");
        this.leftPane=null;
        this.rightPane=null;
    }*/

    public ExceptionDetailsView(String mainSection) {
        super("/templates/common-page.ftl");
        this.mainSection=mainSection;
    }

    public String getMainSection() {
        return mainSection;
    }

    public void setMainSection(String mainSection) {
        this.mainSection = mainSection;
    }

    public List<ExceptionRecord> getExceptionRecordList() {
        return exceptionRecordList;
    }

    public void setExceptionRecordList(List<ExceptionRecord> exceptionRecordList) {
        this.exceptionRecordList = exceptionRecordList;
    }

    public List<ExceptionPerSystem> getExceptionPerSystemsList() {
        return exceptionPerSystemsList;
    }

    public void setExceptionPerSystemsList(List<ExceptionPerSystem> exceptionPerSystemsList) {
        this.exceptionPerSystemsList = exceptionPerSystemsList;
    }
}
