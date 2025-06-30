import React, { useState } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Catalog({ autos }) {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const { addToCart } = useContext(CartContext);

  const filteredCars = autos.filter(({ data: car }) => {
    const matchName = car.model.toLowerCase().includes(search.toLowerCase());
    const matchYear = yearFilter ? car.year === parseInt(yearFilter) : true;
    const matchPrice = priceFilter ? car.price <= parseFloat(priceFilter) : true;
    const matchType = typeFilter ? car.type === typeFilter : true;
    return matchName && matchYear && matchPrice && matchType;
  });

  return (
    <section className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Catálogo Hot Wheels</h2>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center mb-6">

        <input
          type="text"
          placeholder="Buscar modelo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full md:w-64"
        />

        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="border rounded p-2 w-full md:w-40"
        >
          <option value="">Filtrar por año</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>

        <input
          type="number"
          placeholder="Precio máx..."
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border rounded p-2 w-full md:w-40"
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded p-2 w-full md:w-48"
        >
          <option value="">Tipo de auto</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Real">Real</option>
        </select>
      </div>

      {/* Listado de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {filteredCars.map(({ id, data: car }) => (
          <div
            key={id}
            className="bg-white rounded shadow p-4 flex flex-col  "
          >
            <img
              src={car.image}
              alt={`Imagen de ${car.model}`}
              className="w-full h-48 object-contain mb-4 bg-white"
              loading="lazy"
            />
            <h3 className="text-md font-bold mb-1">{car.model}</h3>
            <p className="text-gray-600 mb-1">Año: {car.year}</p>
            <p className="text-gray-600 mb-1">Tipo: {car.type}</p>
            <p className="text-gray-600 mb-1">Letra: {car.letter}</p>
            <p className="text-green-600 font-semibold mb-1">
              Precio: S/ {car.price}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Unidades disponibles: {car.stock}
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-auto"
              onClick={() => addToCart(car)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
        {filteredCars.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No se encontraron productos con los filtros seleccionados.
          </p>
        )}
      </div>
    </section>
  );
}
