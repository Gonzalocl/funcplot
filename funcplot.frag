#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float func_plot(float x, float y) {
    return x*x*x*x+x*x*x-9.0*(x*x)+x + y*y*y*y+y*y*y-9.0*(y*y)+y;
}

void main( void ) {

    vec2 position = ( gl_FragCoord.xy / resolution.xy );

    gl_FragColor = vec4( func_plot(position.x*10.0, position.y*10.0), 0.0, 0.0, 1.0 );

}
