// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
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
 * This function calculates the area of trapazoids and displays it.
 */
function calculateArea() {
  const lengthA = parseFloat(document.getElementById("sideA").value)
  const lengthB = parseFloat(document.getElementById("sideB").value)
  const height = parseFloat(document.getElementById("heigt").value)
  //process
  const area = lenghtA + lengthB / 2 * height
  //output
  document.getElementById("areaOfTrapazoid").innerHTML = "The area of your trapazoid is: " + area + "cm²"
}