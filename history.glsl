void main () {
    vec2 st = uv() - 5.; 
    vec2 stN = uvN();
    vec3 c = black;

    // st = rotate(st, vec2(0.), time);
    float f = kale(st * bands.y, 0.3) * 3.;
    c += step(bands.y * 0.14, f*0.5) * blue * 1.5;
    // when audio is on, uncomment the above two lines and comment out the below two lines
    // float f = voronoi(st * 3.  + time) ;
    // c += step(.5, f) * teal;


    // st = rotate(st, vec2(0.), time);
    // float f2 = voronoi((st) * 3.1 * bands.z + time);
    // c += step(bands.z, f2) * pink;
    // when audio is on, uncomment the above two lines and comment out the below two lines
    // float f2 = voronoi((st) * 3.1  + time);
    // c += step(.5, f2) * pink;

    // st = rotate(st, vec2(0.), time);
    // float f3 = voronoi(st * 3.2 * bands.w + vec2(0,time *2.));
    // c += step(bands.w, f3) * blue;
    // when audio is on, uncomment the above two lines and comment out the below two lines
    // float f3 = voronoi(st * 3.2 + vec2(0,time *2.));
    // c += step(.5, f3) * blue;
    
    vec3 bb = texture2D(backbuffer, stN).rgb * black;
    c += bb;


    gl_FragColor = vec4(c, 1.0);
}
