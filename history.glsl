// too much strobe action
void main () {
    // pixel state
    vec2 state = uv(); 
    vec2 stateN = uvN();
    float theta = pow(state.x, state.y); 
    float phi = step(length(state), bands.x * 3. * fract(time));
    vec3 c = black;

    float d = phi - time * .5 + bands.x;
    c = sin( d * 11. + bands.y * orange) * 0.3;

    // vec3 bb = texture2D(backbuffer, stateN).rgb;


    gl_FragColor = vec4(c, 1.0);
}

// SOURCE CODE
// https://github.com/shawnlawson/The_Force/blob/gh-pages/shaderExperiments/RadialChromeEggs.frag
