Each led has 3 subpixels representing how each pixel color depending on how each subpixel colors at which intensity
![[Pasted image 20240619172050.png]]

in **Camera** how RGB colors components works differently, for each pixel they capture only one of the 3 color values and they will fill the in-between values

![[Pasted image 20240619172224.png]]

### Pixels

pixels are not little squares, its a color values displayed at a point at a center of a pixel location.

## Alpha Blending α

we use α to indicate opacity factor
**α = 0 -> Fully transparent**
**α = 1 -> Fully opaque**

For each pixel we will have RGBA ( 3 for pixel color and 1 for α )
stored in 8-bits per channel -> 32 bits

![[Pasted image 20240619174944.png]]

Alpha Blending is about combining multiple images to form a single image and we gonna use the transparency information of the alpha channel to do so.

![[Pasted image 20240619175046.png]]
![[Pasted image 20240619175134.png]]

**Cf** is Foreground Color while **αf** is Foreground alpha
**Cb** is Background Color


$$C = αf . cf + (1 - αf) . cb$$
That means i can see the foreground color as long I have opacity
and i will not see any of the background color because α is going to be (1-1) = 0

if alpha is not a 1, we will see some of both. if it's 0, the left term will disappear and we will see only the background.

Very typical linear interpolation formula

##### what if the other image has alpha value
![[Pasted image 20240619175457.png]]

we going to combine the alpha values
$$α = αf + (1-αf) . ab$$

a percentage of **αf** we will see, the remaining percentage of it we will see **αb**

back to our original formula, if we multiply cf with αf, it's only fair to multiple cb with αb too!, that means we are calculating αC not just C, so we divide by α and we get This 

$$ C= (αf . cf + (1 - αf) . αb . cb) / α$$
				![[Pasted image 20240619180148.png]]


##### Zero Alpha :
what if we get a zero alpha, division by zero is a trouble, it will only happen if both background and foreground alphas are zero, so it doesn't really matter since both pictures have a zero transparency.

![[Pasted image 20240619180424.png]]

## Blending Modes

- **Additive Blending**:
![[Pasted image 20240619181022.png]]
![[Pasted image 20240619181044.png]]
![[Pasted image 20240619181155.png]]
![[Pasted image 20240619181217.png]]
![[Pasted image 20240619181258.png]]
![[Pasted image 20240619181308.png]]





