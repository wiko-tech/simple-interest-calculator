#!/bin/bash
<<<<<<< HEAD
=======

>>>>>>> 7d338381c437f90ea004f98021f312304b7e4242
# simple-interest.sh
# A simple script to calculate simple interest

# Input: Principal amount, Rate of Interest, Time period
read -p "Enter principal amount: " principal
read -p "Enter rate of interest (in %): " rate
read -p "Enter time period (in years): " time

# Calculate simple interest
simple_interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)

# Output: Simple Interest
echo "The simple interest is: $simple_interest"
