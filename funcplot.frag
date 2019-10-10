#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define d_pixel_size 0.01
#define d_pixel_color vec4(1.0)
//#define d_if_pixel( p, l, x, y ) ((p).x > ((l).x + d_pixel_size*(x)) && (p).x < ((l).x + d_pixel_size*(x+1.0)))
//#define d_if_pixel( p, l, x, y ) ((p.x < l.x) && (x < y))
//#define d_if_pixel( p, l, px ) (((p).x > 0) )
//#define d_if_pixel( p, l, px ) (true && true)
#define d_if_pixel( p, l, px ) ((p).x < (l).x && (p).x < (px).x)
//#define d_if_pixel( p, l, px ) ((p).x < (l).x)

vec4 d_draw_0(vec2 position, vec4 defautl_color, vec2 location) {
//    if (position.x > (location.x + d_pixel_size*0.0) && position.x < (location.x + d_pixel_size*1.0)) return d_pixel_color;
//    if (d_if_pixel(position, location, vec2(0.0, 0.1))) return d_pixel_color;
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
    return defautl_color;
}

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

    gl_FragColor = d_draw_0(position, color, vec2( 0.5 ));

}
