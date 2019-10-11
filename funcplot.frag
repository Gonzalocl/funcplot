#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define d_pixel_size 0.01
#define d_pixel_color vec4(1.0)
#define d_max_frac 4
#define d_max_digits 4
#define d_digit_width 4
#define d_digit_height 6
#define d_int_width d_digit_width*(d_max_digits + 1)
#define d_int_height d_digit_height

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
vec4 d_draw_hyphen(vec4 defautl_color, vec2 location) {
    vec2 position = ( gl_FragCoord.xy / resolution.xy );

if (d_if_pixel(position, location, vec2(0.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(1.0, 2.0))) return d_pixel_color;
if (d_if_pixel(position, location, vec2(2.0, 2.0))) return d_pixel_color;

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
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    // check negative
    if (i < 0) {
        i = -i;
        if (position.y > location.y && position.y < (location.y + d_pixel_size*float(d_digit_height))
        && position.x > location.x
        && position.x < (location.x + d_pixel_size*float(d_digit_width))) {
            return d_draw_hyphen(defautl_color, location);
        }
    }
    location.x += d_pixel_size*float(d_digit_width);
    // TODO check max digits
    // TODO check defautl first in all fuctions
    for (int j = 0; j < d_max_digits; j++) {
        int digit = int( mod( float(i) / ( pow( 10.0, float(j) ) ), 10.0 ) );
        float digit_position = float(d_max_digits - j - 1);
        // TODO y check comon factor
        if (position.y > location.y && position.y < (location.y + d_pixel_size*float(d_digit_height))
                && position.x > (location.x + digit_position*d_pixel_size*float(d_digit_width))
                && position.x < (location.x + (digit_position+1.0)*d_pixel_size*float(d_digit_width))) {
            return d_draw_digit(defautl_color, vec2(location.x + (digit_position*d_pixel_size*float(d_digit_width)), location.y), digit);
        }
    }
    return defautl_color;
}

vec4 d_draw_float(vec4 defautl_color, vec2 location, float f) {
    // TODO solve gap too large
    vec2 position = ( gl_FragCoord.xy / resolution.xy );
    // Draw integer part
    if (position.y > location.y && position.y < (location.y + d_pixel_size*float(d_int_height))
    && position.x > location.x
    && position.x < (location.x + d_pixel_size*float(d_int_width))) {
        return d_draw_int(defautl_color, location, int(f));
    }
    location.x += d_pixel_size*float(d_int_width);
    // Draw dot
    if (position.y > location.y && position.y < (location.y + d_pixel_size*float(d_digit_height))
    && position.x > location.x
    && position.x < (location.x + d_pixel_size*float(d_digit_width))) {
        return d_draw_dot(defautl_color, location);
    }
    location.x += d_pixel_size*float(d_digit_width);
    // Draw decimal part
    if (position.y > location.y && position.y < (location.y + d_pixel_size*float(d_int_height))
    && position.x > location.x
    && position.x < (location.x + d_pixel_size*float(d_int_width))) {
        return d_draw_int(defautl_color, location, int(mod(f*pow(10.0, float(d_max_digits)),pow(10.0, float(d_max_digits)))));
    }
    return defautl_color;
}

float func_plot(float x, float y) {
    return x*x*x*x+x*x*x-9.0*(x*x)+x + y*y*y*y+y*y*y-9.0*(y*y)+y;
}

void main( void ) {


    // TODO change this in all functions user coords insted of position
    vec2 position = ( gl_FragCoord.xy / resolution.xy );

    vec4 color = vec4( func_plot(position.x*10.0, position.y*10.0), 0.0, 0.0, 1.0 );

    color = d_draw_float(color, vec2(0.0, 0.0), mouse.x);
    color = d_draw_float(color, vec2(0.5, 0.0), mouse.y);
    color = d_draw_float(color, vec2(0.0, 0.2), resolution.x);
    color = d_draw_float(color, vec2(0.5, 0.2), resolution.y);

    if (gl_FragCoord.x == 0.5) color = vec4(0.0, 1.0, 0.0, 1.0);
    if (gl_FragCoord.y == 2.5) color = vec4(0.0, 0.0, 1.0, 1.0);

    gl_FragColor = color;

}
