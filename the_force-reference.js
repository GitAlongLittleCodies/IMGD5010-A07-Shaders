=== GL ==
gl_FragCoord = vec4(x, y, z, w) // fragment position within
                                // frame buffer window coordinates

gl_FragColor = vec4(r, g, b, a) // fragment color

texture2D(tex, vec2) = vec4(r, g, b, a) // tex is a texture: channel0 ...
                                        // channel3 or backbuffer


  === MATH ===
  // list of common gles math functions
radians(x)      // degrees to radians
degrees(x)      // radians to degrees
sin(x)          // sine of angle
cos(x)          // cosine of angle
tan(x)          // tangent of angle
asin(x)         // arc sine of angle
acos(x)         // arc cosine of angle
atan(y, x)      // arc tangent of (y, x)
atan(y_over_x)  // arc tangent of y/x
pow(x, y)       // x to y exponent; x^y
exp(x)          // ex
log(x)          // natural log
exp2(x)         // 2x
log2(x)         // log base 2
sqrt(x)         // square root; x^(1/2)
inversesqrt(x)  // inverse square root; 1/(x^(1/2))
abs(x)          // absolute value
sign(x)         // returns -1.0, 0.0, or 1.0
floor(x)        // nearest integer less than x
ceil(x)         // nearest integer greater than x
fract(x)        // x - floor(x)
mod(x, y)       // modulus
min(x, y)       // minimum value
max(x, y)       // maximum value
clamp(x,        // keep x between minVal and maxVal
      minVal,
      maxVal)
mix(x, y, a)    // linear blend of x and y using a. (lerp)
step(edge, x)   // 0.0 if x less than edge, else 1.0
smoothstep(edge0, // clip and smooth
           edge1,
           x)
  
=== SNIPPETS ===
forf    = for(float i = 0.0; i < float; i++){
          }
fori    = for(int i = 0; i < int; i++){
          }
iff     = if(false){
          }
vc     = vec2
vvc    = vec3
ft     = float


=== ADD ONS ==
PI              = 3.14159;
PI2             = 6.28318;
uv()            = vec2(x, y); // This pixel on screen when
                              // coordinate system is: width
                              //  -width/height to width/height
                              //, height -1.0 to 1.0;
                              // center of canvas is origin
uvN()             = vec2(x, y); // this pixel on screen when
                              // coordinate system is: width
                              // 0.0 to 1.0, height 0.0 to 1.0;
                              // bottom-left of canvas is origin
kale(vec2 p, float n) = float // Accepts UV-like space, and
                              // divisions of PI. Returns a
                              // kaleidoscope value
rand(float x)   = float       // pseudo-random 0.0 to 1.0
rand(vec2 x)    = float
noise( float )  = float       // noise 0.0 to 1.0
noise( vec2 )   = float
noise( vec3 )   = float
snoise( vec2 )  = float       // signed noise -1.0 to 0.0
snoise( vec3 )  = float
turbulence( vec2,
            float octaves ) = float    //returns random values 0.0 to 1.0
voronoi( vec2 ) = float       // returns 0.0 to 1.0 with a smooth
                              // voronoi pattern
voronoi( vec3 ) = vec3        // returns a vec3 voronoi in three dimensions
fbm(float x, int it) = float  // Brownian motion function generator
                              // second parameter is number of iterations
fbm(vec2 x, int it) = float
fbm(vec3 x, int it) = float
rmf(vec2 x, int it) = float   // rigid multi-fractal generator
                              // second parameter is number of iterations
vrmf(vec2 x, int it) = float  // Voronoi version of rigid multi-fractal
                              // second parameter is number of iterations
vfbm(vec2 x, int it) = float  // Voronoi version of Brownian motion
                              // second parameter is number of iterations

hsv2rgb( vec3 ) = vec3        // convert hue, saturation, value to
                              // red, green, blue
rotate(vec2 pivot,
       vec2(x, y),
       float amount)

box(vec2(x, y),
    vec2(width, height),
    float corner-roundness,
    float edge-feathering);

circle(float x,
       float y,
       float radius,
       float edge-feathering)
