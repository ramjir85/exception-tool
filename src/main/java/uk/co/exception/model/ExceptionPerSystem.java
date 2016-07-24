package uk.co.exception.model;


public class ExceptionPerSystem {

    private String system;
    private int exceptionCount;

    public ExceptionPerSystem() {

    }

    public ExceptionPerSystem(String system, int exceptionCount) {
        this.system = system;
        this.exceptionCount = exceptionCount;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public int getExceptionCount() {
        return exceptionCount;
    }

    public void setExceptionCount(int exceptionCount) {
        this.exceptionCount = exceptionCount;
    }
}
