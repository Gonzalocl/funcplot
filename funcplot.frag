#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define d_pixel_size 0.01
#define d_pixel_color vec4(1.0)
#define d_max_frac 8
#define d_max_digits 8
#define d_if_pixel( p, l, px ) ((p).x > ((l).x + d_pixel_size*(px).x) && (p).x < ((l).x + d_pixel_size*((px).x + 1.0)) && (p).y > ((l).y + d_pixel_size*(px).y) && (p).y < ((l).y + d_pixel_size*((px).y + 1.0)))


vec4 d_draw_rectangle(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 1.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 1.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 3.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 3.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_0(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 1.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 3.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_1(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(1.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 3.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_2(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_3(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_4(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 3.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_5(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_6(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 1.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_7(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_8(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 1.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 3.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_9(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 0.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 0.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(2.0, 1.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 3.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 3.0))) return d_pixel_color;

if (d_if_pixel(position, location, vec2(0.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 4.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 4.0))) return d_pixel_color;
return defautl_color;
}
vec4 d_draw_dot(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d_if_pixel(position, location, vec2(0.0, 0.0))) return d_pixel_color;
return defautl_color;
}

vec4 d_draw_digit(vec4 defautl_color, vec2 location, int d) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    if (d == 0) return d_draw_0(defautl_color, location);
    if (d == 1) return d_draw_1(defautl_color, location);
    if (d == 2) return d_draw_2(defautl_color, location);
    if (d == 3) return d_draw_3(defautl_color, location);
    if (d == 4) return d_draw_4(defautl_color, location);
    if (d == 5) return d_draw_5(defautl_color, location);
    if (d == 6) return d_draw_6(defautl_color, location);
    if (d == 7) return d_draw_7(defautl_color, location);
    if (d == 8) return d_draw_8(defautl_color, location);
    if (d == 9) return d_draw_9(defautl_color, location);
    return defautl_color;
}

vec4 d_draw_int(vec4 defautl_color, vec2 location, int i) {
    // TODO check negative
    // TODO check max digits
    // TODO check defautl first in all fuctions
    int l = 1;
    for (int j = 0; j < d_max_digits; j++) {
        // TODO check this
        if (( float(i) /( pow(10.0, float(l) ) )) > 1.0) {
            l++;
        }
        else {
            break;
        }
    }
    return d_draw_digit(defautl_color, location, l);
    return defautl_color;
}

vec4 d_draw_float(vec4 defautl_color, vec2 location, float f) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    // Draw  decimal part
    return defautl_color;
}

float func_plot(float x, float y) {
    return x*x*x*x+x*x*x-9.0*(x*x)+x + y*y*y*y+y*y*y-9.0*(y*y)+y;
}

void main( void ) {

    vec2 position = ( gl_FragCoord.xy / resolution.xy );

    vec4 color = vec4( func_plot(position.x*10.0, position.y*10.0), 0.0, 0.0, 1.0 );

    color = d_draw_rectangle(color, vec2( 0.5 ));
    color = d_draw_digit(color, vec2( 0.0, 0.0 ), 0);
    color = d_draw_digit(color, vec2( 0.1, 0.0 ), 1);
    color = d_draw_digit(color, vec2( 0.2, 0.0 ), 2);
    color = d_draw_digit(color, vec2( 0.3, 0.0 ), 3);
    color = d_draw_digit(color, vec2( 0.4, 0.0 ), 4);
    color = d_draw_digit(color, vec2( 0.5, 0.0 ), 5);
    color = d_draw_digit(color, vec2( 0.6, 0.0 ), 6);
    color = d_draw_digit(color, vec2( 0.7, 0.0 ), 7);
    color = d_draw_digit(color, vec2( 0.8, 0.0 ), 8);
    color = d_draw_digit(color, vec2( 0.9, 0.0 ), 9);
    color = d_draw_int(color, vec2(0.6), 27);
    gl_FragColor = color;

}
