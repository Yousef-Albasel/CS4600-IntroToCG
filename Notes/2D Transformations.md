****
## 2D Affine Transformations

- Translation
- Rotation
- Scale

#### Translation
---

is moving a vector by adding another vector to it 

![[Pasted image 20240621205009.png]]

#### Scale
-------
is multiplying a vector by some scalar
![[Pasted image 20240621205116.png]]

can be different scalars *non-uniforms*

#### Rotation
-----

We are taking an object and rotating it by some angle `theta`
we going to represent a vector as a sum of it's components 
![[Pasted image 20240621205255.png]]\

when we rotate this vector, we are rotating all 3 vectors together x,y,P, but how to get that vector coordinates?
![[Pasted image 20240621205359.png]]

by using the trig identity we can find the coordinates of the P

![[Pasted image 20240621205453.png]]

The rotating vector is the sum of multiplying both x,y coordinates with the rotating vectors
![[Pasted image 20240621205645.png]]

there is a simpler way to write this.
![[Pasted image 20240621205740.png]]

### Let's talk about rotation matrices

- Rotation matrices are **orthogonal** ( each vector is perpendicular on the other)
- it's transpose is going to be it's inverse
- $R.R^T=I$
![[Pasted image 20240621210406.png]] 

![[Pasted image 20240621210449.png]]

Skew is just about rotating and scaling
![[Pasted image 20240621210526.png]]

### Singular Value Decomposition (SVD)
it's an operation that takes a matrix and converts it to orthogonal, diagonal(scalar) ,orthogonal matrices

### Rotation & Translation

rotations apply it around the origin point, but what if i want to rotate it around the center?
![[Pasted image 20240621210949.png]]

to be able to do a rotation around a point we need to have two translations,
that brings to **Homogeneous Coordinates**, this will going to allow us to represent translations as a part of our matrices.


## Homogeneous Coordinates

$P' = p+t$
we want to translate it to 
$P' = T.p$
we can't just do it using normal matrix addition
![[Pasted image 20240621211223.png]]

**BUT** if we have more one more coordinate in our vector **with value of 1**
we can write our matrix on this format

![[Pasted image 20240621211350.png]]

we can not multiply both matrices we will have the same result
and to convert both equation terms into homogenous we add another row to our 2x3 matrix, getting a 3x3 matrix
![[Pasted image 20240621211542.png]]

The reason we are doing this because now we can get all forms of transformations and combine it into one matrix having all forms of transformations !!!!! (MODEL VEW PROJECTION MATRIX REMEMBER IT)

![[Pasted image 20240621211710.png]]


we are still representiong the same point but from another view point

#### Positions vs Directions
![[Pasted image 20240621212015.png]]

if the vector represents a point, then it's okay to assume the blue vector represents the same point, but what if a vector represents a direction?
![[Pasted image 20240621212057.png]]\
then we would like to have a transformation that will give me the same exact direction

Homogenous Coordinates will help me do that

![[Pasted image 20240621212211.png]]