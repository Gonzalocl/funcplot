//Gonzalo Caparros Laiz

#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define x_max 7.0
#define x_min -7.0
#define x_range (x_max - x_min)

#define y_max 3.0
#define y_min -3.0
#define y_range (y_max - y_min)

#define z_max 0.00000000000000001
#define z_min 0.0
#define z_range (z_max - z_min)


float func_plot(float x, float y) {
    return ( (x/7.0)*(x/7.0)* sqrt(abs(abs(x)-3.0)/(abs(x)-3.0)) + (y/3.0)*(y/3.0)* sqrt(abs(y+ 3.0/7.0* sqrt(33.0))/(y+ 3.0/7.0* sqrt(33.0))) - 1.0 )*
    ( abs(x/2.0)-(3.0* sqrt(33.0)-7.0)* x*x/112.0 -3.0 +sqrt(1.0-(abs((abs(x)-2.0))-1.0)*(abs((abs(x)-2.0))-1.0))-y)*
    (9.0* sqrt(abs((abs(x)-1.0)*(abs(x)-0.75))/((1.0-abs(x))*(abs(x)-0.75)))- 8.0* abs(x)-y)*
    (3.0* abs(x) + 0.75* sqrt(abs((abs(x)-0.75)*(abs(x)-0.5))/((0.75-abs(x))*(abs(x)-0.5)))-y)*
    (2.25* sqrt(abs((abs(x)-0.5)*(abs(x)-0.5))/((0.5-abs(x))*(abs(x)-0.5)))-y)*
    (6.0* sqrt(10.0)/7.0 + (1.5-0.5* abs(x))* sqrt(abs(abs(x)-1.0)/(abs(x)-1.0)) - 6.0* sqrt(10.0)/14.0* sqrt(4.0-(abs(x)-1.0)*(abs(x)-1.0)) -y);
}

void main( void ) {

    vec2 position = ( gl_FragCoord.xy / resolution.xy );

    vec4 color = vec4( (func_plot((position.x-mouse.x)*x_range, (position.y-mouse.y)*y_range)-z_min)/z_range, 0.0, 0.0, 1.0 );

    gl_FragColor = color;

}
