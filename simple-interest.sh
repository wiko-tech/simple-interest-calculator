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
   #!/bin/bash
   # This script calculates simple interest given principal,
   # annual rate of interest and time period in years.

   # Do not use this in production. Sample purpose only.

   # Author: Upkar Lidder (IBM)
   # Additional Authors:
   # <your GitHub username>

   # Input:
   # p, principal amount
   # t, time period in years
   # r, annual rate of interest

   # Output:
   # simple interest = p*t*r

   echo "Enter the principal:"
   read p
   echo "Enter rate of interest per year:"
   read r
   echo "Enter time period in years:"
   read t

   s=`expr $p \* $t \* $r / 100`
   echo "The simple interest is: "
   echo $s
