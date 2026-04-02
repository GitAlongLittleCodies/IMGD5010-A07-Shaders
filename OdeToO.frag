// http://www.iquilezles.org/www/articles/palettes/palettes.htm
vec3 cosPalette( float t, vec3 a, vec3 b, vec3 c, vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
  vec2 p = uv();
  float spotLight = 0.;
  
// ----> SPOTLIGHT g
    vec2 pos = vec2(0., 0.05);
    float radius = 0.5 + ( bands.x * 0.035 ) ;
    float dist = distance(p, pos);
    float blur = 0.05;
    spotLight = ( 1.0 - smoothstep(radius, radius+blur, dist * 1.0 ) );

// ----> PATTERN
  float shapes = 0.; 
  float gain = 1.;
  float thickness = .05;
  for( float i = 0.; i < 50.; i++ ) { 
    p.x += sin( bands.x * i) * gain-0.35 * bands.x*0.5; 
    shapes += abs( thickness / p.x );
    p.y += cos( bands.y * i) * gain-0.35 * bands.y*0.5;
    shapes += abs(thickness/p.y);
  }
  
  vec3 moreColor = cosPalette( sin( time * 0.2 ) , vec3(0.5), vec3(0.5), vec3(1), vec3( time*0.001 , time*0.01 , time*.02 ) );

  gl_FragColor = vec4( shapes ) / vec4(moreColor, 1.0) * 0.0000000001 + vec4(spotLight);
 
}