package Herencia;

public class EjemploHerencia {
    public static void main(String[] args) {
        // Creamos un objeto de la clase Coche
        Coche miCoche = new Coche("Toyota", "Corolla", "Rojo", 4, true);
        miCoche.acelerar(20);
        miCoche.abrirPuerta();
        System.out.println(miCoche.obtenerDetalles());
        miCoche.frenar(10);
        System.out.println();

        // Creamos un objeto de la clase Bicicleta
        Bicicleta miBicicleta = new Bicicleta("Giant", "Roam", "Azul", 21, true);
        miBicicleta.acelerar(5);
        miBicicleta.pedalear();
        System.out.println(miBicicleta.obtenerDetalles());
        miBicicleta.frenar(2);
    }
}