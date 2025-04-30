package Herencia;

public class Vehiculo {
    String marca;
    String modelo;
    String color;
    int velocidadActual;

    public Vehiculo(String marca, String modelo, String color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidadActual = 0;
    }

    public void acelerar(int incremento) {
        velocidadActual += incremento;
        System.out.println(marca + " " + modelo + " acelerando. Velocidad actual: " + velocidadActual + " km/h");
    }

    public void frenar(int decremento) {
        velocidadActual -= decremento;
        if (velocidadActual < 0) {
            velocidadActual = 0;
        }
        System.out.println(marca + " " + modelo + " frenando. Velocidad actual: " + velocidadActual + " km/h");
    }

    public String obtenerDetalles() {
        return "Marca: " + marca + ", Modelo: " + modelo + ", Color: " + color + ", Velocidad actual: " + velocidadActual + " km/h";
    }
}