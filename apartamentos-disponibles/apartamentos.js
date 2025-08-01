
export default function ApartamentosDisponibles() {
  const apartamentos = [
    { id: "1A", status: "disponible", descripcion: "2 habitaciones, 75 m²" },
    { id: "1B", status: "reservado", descripcion: "1 habitación, 55 m²" },
    { id: "1C", status: "disponible", descripcion: "2 habitaciones, 80 m²" },
    { id: "1D", status: "reservado", descripcion: "1 habitación, 50 m²" },
    { id: "1E", status: "disponible", descripcion: "2 habitaciones, 78 m²" },
    { id: "1F", status: "disponible", descripcion: "2 habitaciones, 82 m²" },
    { id: "2A", status: "reservado", descripcion: "2 habitaciones, 75 m²" },
    { id: "2B", status: "disponible", descripcion: "1 habitación, 55 m²" },
    { id: "2C", status: "disponible", descripcion: "2 habitaciones, 80 m²" },
    { id: "2D", status: "reservado", descripcion: "1 habitación, 50 m²" },
    { id: "2E", status: "reservado", descripcion: "2 habitaciones, 78 m²" },
    { id: "2F", status: "disponible", descripcion: "2 habitaciones, 82 m²" },
    { id: "3A", status: "disponible", descripcion: "2 habitaciones, 75 m²" },
    { id: "3B", status: "reservado", descripcion: "1 habitación, 55 m²" },
    { id: "3C", status: "reservado", descripcion: "2 habitaciones, 80 m²" },
    { id: "3D", status: "disponible", descripcion: "1 habitación, 50 m²" },
    { id: "3E", status: "disponible", descripcion: "2 habitaciones, 78 m²" },
    { id: "3F", status: "disponible", descripcion: "2 habitaciones, 82 m²" },
    { id: "4A", status: "reservado", descripcion: "2 habitaciones, 75 m²" },
    { id: "4B", status: "disponible", descripcion: "1 habitación, 55 m²" },
    { id: "4C", status: "disponible", descripcion: "2 habitaciones, 80 m²" },
    { id: "4D", status: "reservado", descripcion: "1 habitación, 50 m²" },
    { id: "4E", status: "reservado", descripcion: "2 habitaciones, 78 m²" },
    { id: "4F", status: "disponible", descripcion: "2 habitaciones, 82 m²" },
    { id: "5A", status: "disponible", descripcion: "Loft, 90 m²" },
    { id: "5B", status: "reservado", descripcion: "Penthouse, 120 m²" },
    { id: "5C", status: "disponible", descripcion: "2 habitaciones, 85 m²" },
    { id: "5D", status: "disponible", descripcion: "2 habitaciones, 88 m²" },
    { id: "5E", status: "reservado", descripcion: "1 habitación, 55 m²" },
    { id: "5F", status: "disponible", descripcion: "2 habitaciones, 82 m²" }
  ];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "10px",
    padding: "20px"
  };

  const cardStyle = (status) => ({
    width: "80px",
    height: "80px",
    backgroundColor: status === "reservado" ? "pink" : "green",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    cursor: "pointer"
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { style: gridStyle },
      apartamentos.map((apt) =>
        React.createElement("div", {
          key: apt.id,
          title: apt.descripcion + " - " + (apt.status === "reservado" ? "Reservado" : "Disponible"),
          style: cardStyle(apt.status),
          children: apt.id
        })
      )
    )
  );
}
