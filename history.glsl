void main () {
    vec2 stN = uvN();
    vec2 st = uv();
    vec3 color = black;
    float x = 0.3;
    float y = 0.05;
    vec4 front = texture2D(channel0,  stN).rgba;

    color += circle(x, y, .5 * bands.z, 0.7) * white -0.5;
    color += circle(x, y, .7 * (1.1*bands.y), .5) * white*0.5 * bands.x * 5.;
    
    
    color = mix(color, vec3(front), 0.95);
    
    vec3 fade = 1.0 - stN.x * 0.9 * black;
    
	gl_FragColor = vec4(color * fade , 0.5);
}
