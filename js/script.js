// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT3-01-STORYBOARD/sw.js", {
    scope: "/ICS2O-UNIT3-01-STORYBOARD/",
  })
}

/**
 * This function calculates the area of trapezoids and displays it.
 */
function calculateArea() {
  const lengthA = parseFloat(document.getElementById("side-a").value)
  const lengthB = parseFloat(document.getElementById("side-b").value)
  const height = parseFloat(document.getElementById("height").value)
  //process
  const area = ((lengthA + lengthB) / 2) * height
  //output
  document.getElementById("areaOftrapezoid").innerHTML =
    "The area of your trapezoid is: " + area + "cm²"
}
