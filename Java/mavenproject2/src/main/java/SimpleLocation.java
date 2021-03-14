/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author jamesim
 */
public class SimpleLocation {
    double latitude;
    double longitude;
    
    public SimpleLocation(){
        this.latitude = 32.9;
        this.longitude = -117.2;
    }
    
    public SimpleLocation(double lat, double lon){
        this.latitude = lat;
        this.longitude = lon;
    }
    public double distance(SimpleLocation other){
        SimpleLocation a = other;
        return a.latitude;
    }
    
    public double distance(double otherlat, double otherlon){
        return otherlat;
    } 
    
}
