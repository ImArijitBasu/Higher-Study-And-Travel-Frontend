"use client";
import React from "react";

const FilterSection = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Filter</h2>

      {/* Continent Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Continent</h3>
        <ul className="space-y-1 text-gray-700">
          <li><label><input type="radio" name="continent" className="mr-2" /> Asia</label></li>
          <li><label><input type="radio" name="continent" className="mr-2" /> Africa</label></li>
          <li><label><input type="radio" name="continent" className="mr-2" /> Europe</label></li>
          <li><label><input type="radio" name="continent" className="mr-2" /> North America</label></li>
          <li><label><input type="radio" name="continent" className="mr-2" /> Oceania</label></li>
          <li><label><input type="radio" name="continent" className="mr-2" /> South America</label></li>
        </ul>
      </div>

      {/* Activities Filter */}
      <div>
        <h3 className="font-semibold mb-2">Activities</h3>
        <ul className="space-y-1 text-gray-700">
          <li><label><input type="radio" name="activities" className="mr-2" /> Beaches</label></li>
          <li><label><input type="radio" name="activities" className="mr-2" /> Mountains</label></li>
          <li><label><input type="radio" name="activities" className="mr-2" /> Adventure</label></li>
          <li><label><input type="radio" name="activities" className="mr-2" /> Culture</label></li>
          <li><label><input type="radio" name="activities" className="mr-2" /> Wildlife</label></li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
