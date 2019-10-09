#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec4 debug_f(vec2 position, vec4 defautl_color, vec2 location, float f) {
    float size = 0.1;
    float sub_size = 0.1/5.0;
    if (position.x > location.x && position.x < (location.x+size/2.0)
        && position.y > location.y && position.y < (location.y+size) ) {

        if (f >= 1.0) {
            // print +
            return vec4( 1.0 );
        }
        else if (f <= 0.0) {
            // print -
            return vec4( 0.0 );
        }
        else {
            // print f*10
            return vec4( 0.5 );
        }
    }
    return defautl_color;
}

float func_plot(float x, float y) {
    return x*x*x*x+x*x*x-9.0*(x*x)+x + y*y*y*y+y*y*y-9.0*(y*y)+y;
}

void main( void ) {

    vec2 position = ( gl_FragCoord.xy / resolution.xy );

    vec4 color = vec4( func_plot(position.x*10.0, position.y*10.0), 0.0, 0.0, 1.0 );

    gl_FragColor = debug_f(position, color, vec2( 0.5 ), 0.5);

}
