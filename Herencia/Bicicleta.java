package Herencia;

// Otra clase derivada (Subclase) que hereda de Vehiculo
class Bicicleta extends Vehiculo {
    int numeroDeVelocidades;
    boolean tieneCanasta;

    public Bicicleta(String marca, String modelo, String color, int numeroDeVelocidades, boolean tieneCanasta) {
        super(marca, modelo, color);
        this.numeroDeVelocidades = numeroDeVelocidades;
        this.tieneCanasta = tieneCanasta;
    }

    public void pedalear() {
        System.out.println("Pedaleando la bicicleta " + marca + " " + modelo);
    }

    @Override
    public void acelerar(int incremento) {
        velocidadActual += incremento * 2; // Las bicicletas pueden acelerar diferente
        System.out.println(marca + " " + modelo + " pedaleando más rápido. Velocidad actual: " + velocidadActual + " km/h");
    }

    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Número de velocidades: " + numeroDeVelocidades + ", Canasta: " + (tieneCanasta ? "Sí" : "No");
    }
}