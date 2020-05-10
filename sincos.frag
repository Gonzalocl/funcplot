//Gonzalo Caparros Laiz

#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define x_max 10.0
#define x_min -10.0
#define x_range (x_max - x_min)

#define y_max 10.0
#define y_min -10.0
#define y_range (y_max - y_min)

#define z_max 0.00000000000000001
#define z_min 0.0
#define z_range (z_max - z_min)


float func_plot(float x, float y) {
    return sin(x*x + y*y) - cos(x*y);
}

void main( void ) {

    vec2 position = ( gl_FragCoord.xy / resolution.xy );

    vec4 color = vec4( (func_plot((position.x-mouse.x)*x_range, (position.y-mouse.y)*y_range)-z_min)/z_range, 0.0, 0.0, 1.0 );

    gl_FragColor = color;

}
