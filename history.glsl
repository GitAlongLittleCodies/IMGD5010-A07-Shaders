void main () {
    vec2 stN = uvN();
    vec2 st = uv();
    vec3 color = black;
    float x = 0.3;
    float y = 0.05;
    vec4 texture = texture2D(channel0,  stN).rgba;
    vec3 hiker = black;

    color += circle(x, y, .5 * bands.z, 0.7) * white -0.5;
    color += circle(x, y, .7 * (1.1*bands.y), .5) * white*0.5 * bands.x * 5.;
    
    hiker += circle(0.028, -0.02, 0.829, 0.) * bands.x * 0.1;
    
    
    color = hiker + mix(color, vec3(texture), 0.95);
    
    vec3 fade = 1.0 - stN.x * 0.9 * black;
    
	gl_FragColor = vec4(color * fade , 0.5);
}
