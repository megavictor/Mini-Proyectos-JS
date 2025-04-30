package Herencia;

class Coche extends Vehiculo {
    int numeroDePuertas;
    boolean tieneAireAcondicionado;

    public Coche(String marca, String modelo, String color, int numeroDePuertas, boolean tieneAireAcondicionado) {
        // Llamamos al constructor de la superclase (Vehiculo) para inicializar los atributos heredados
        super(marca, modelo, color);
        this.numeroDePuertas = numeroDePuertas;
        this.tieneAireAcondicionado = tieneAireAcondicionado;
    }

    public void abrirPuerta() {
        System.out.println("Abriendo una puerta del " + marca + " " + modelo);
    }

    // Sobrescribimos el método obtenerDetalles() de la superclase para incluir información específica del Coche
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Número de puertas: " + numeroDePuertas + ", Aire acondicionado: " + (tieneAireAcondicionado ? "Sí" : "No");
    }
}