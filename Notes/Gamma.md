
### Gamma
There are two key issues that must be understood to produce correct images on monitors. The first is that monitors are non-linear with respect to input. For example, if you give a monitor 0, 0.5, and 1.0 as inputs for three pixels, the intensities displayed might be 0, 0.25, and 1.0 (off, one-quarter fully on, and fully on). As an approximate characterization of this non-linearity, monitors are commonly characterized by a γ (“gamma”) value. This value is the degree of freedom in the formula
			**displayed intensity = (maximum intensity)aγ**


For example, if a monitor has a gamma of 2.0, and we input a value of a = 0.5, the displayed intensity will be one fourth the maximum possible intensity because $0.5^2$ = 0.25

if $a^γ = 0.5$, then we can deduce γ by taking $ln$ on both sides
$γ = ln 0.5/ln a$ 


![[Pasted image 20240619165342.png]]

#### Gamma Correction
for any number that is not in the range between 0,1 we need to use this Formula instead
![[Pasted image 20240619165711.png]]


**sRGB (Standard RGB)** : γ = 2.2 
![[Pasted image 20240619171343.png]]

