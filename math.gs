%define ATAN2(Y,X) (atan(Y / X) + 180 * (X < 0) * (2 * (Y > 0) - 1))

%define ACOSH(X) ln((X)+sqrt((X)*(X)-1))
%define ASINH(X) ln((X)+sqrt((X)*(X)+1))
%define ATANH(X) ln((1+(X))/(1-(X)))/2
%define COSH(X) ((antiln(X)+antiln(-(X)))/2)
%define SINH(X) ((antiln(X)-antiln(-(X)))/2)
%define TANH(X) ((antiln(X)-antiln(-(X)))/(antiln(X)+antiln(-(X))))

%define LERP(a,b,t) ((a)+((b)-(a))*(t))
# Return the minimum of `A` and `B`.
%define MIN(A,B) ((A) - ((A) - (B)) * ((A) > (B)))

# Return the maximum of `A` and `B`.
%define MAX(A,B) ((A) + ((B) - (A)) * ((A) < (B)))

# Combine RGB values into a single value for use with the `set_pen_color` block.
%define RGB(R,G,B) (((R) * 65536) + ((G) * 256) + (B))

# Combine RGBA values into a single value for use with the `set_pen_color` block.
%define RGBA(R,G,B,A) (((R) * 65536) + ((G) * 256) + (B) + ((A) * 16777216))

# Parse a hexadecimal value.
%define HEX(VALUE) (("0x"&(VALUE))+0)

# Parse a binary value.
%define BIN(VALUE) (("0b"&(VALUE))+0)

# Parse an octal value.
%define OCT(VALUE) (("0o"&(VALUE))+0)

# Return `BASE` raised to the power of `EXP`.
%define POW(BASE,EXP) antiln(ln(BASE)*(EXP))

# Return nth root of x
%define NROOT(n,x) antiln(ln(x) / n)

# Clamp `VALUE` above zero. (Returns 0 for `VALUE` < 0)
%define POSITIVE_CLAMP(VALUE) (((VALUE)>0)*(VALUE))

# Clamp `VALUE` below zero. (Returns 0 for `VALUE` > 0)
%define NEGATIVE_CLAMP(VALUE) (((VALUE)<0)*(VALUE))

# Clamp `VALUE` between `MIN` and `MAX`.
# (Returns `MIN` for `VALUE` < `MIN`, `MAX` for `VALUE` > `MAX`)
%define CLAMP(VALUE,MIN,MAX) ((MIN)*((VALUE)<=(MIN))) + ((MAX)*((VALUE)>=(MAX))) + ((VALUE)*((MIN)<(VALUE) and (VALUE)<(MAX)))

# Return the distance between the points `(X1,Y1)` and `(X2,Y2)`.
%define DIST(X1,Y1,X2,Y2) sqrt(((X2)-(X1))*((X2)-(X1))+((Y2)-(Y1))*((Y2)-(Y1)))

# Get distance between the points `(X1,Y1)` and `(X2,Y2)`, but don't square root it
%define DISTSQUARED(X1,Y1,X2,Y2) ((X2)-(X1))*((X2)-(X1))+((Y2)-(Y1))*((Y2)-(Y1))

# Return the direction (of a sprite) from a position  `(CX, CY)` to `(X, Y)`
%define DIR(X,Y,CX,CY) atan (((X)-(CX)) / ((Y)-(CY))) + 180 * ((CY) > (Y))
%define DIRCC(X,Y,CX,CY) atan (((Y)-(CY)) / ((X)-(CX))) + 180 * ((CX) > (X))

# Return SIGN of V. If V < 0, return -1, elif V == 0, return 0, else return 1
# 'Undefined' behaviour when used with non-numbers or booleans
%define SIGN(V) (V > 0) - (V < 0)

# Linear interpolation from a to b, with a ratio of t
%define LERP(A,B,T) (A) + ((B) - (A)) * (T)

# Work out the ratio of val from a to b
%define INVLERP(VAL,A,B) ((VAL) - (A)) / ((B) - (A))

# Return `log base b of x`
%define LOGB(b,x) ln(x) / ln(b)

# Power function that always works so long as it's not a complex result (doesn't break with negative base)
func safepow(x, y) {
    return (POW(abs($x), $y)) * (SGNBOOL(not($x < 0 and $y % 2)));
}

# Constants
%define PI 3.141592653589793
%define E 2.718281828459045
# PI * 2
%define TAU 6.283185307179586
# (1 + sqrt 5) / 2
%define GOLDEN_RATIO 1.618033988749895
%define INF "Infinity"

# boolean things

# true -> 1, false -> -1
%define SGNBOOL(b) (2 * (b)) - 1

%define XOR(a,b) ((a) != (b))

# min, max stuff
# you can find simple stuff in math.gs
# consider looking at https://en.wikipedia.org/wiki/Smooth_maximum
# smooth min & max from blender apparently
func smooth_min(x, y, s=1) { # s = smoothing factor
    local c = (MAX($s - abs($x - $y), 0)) / $s;
    return MIN($x, $y) - (($s/6) * c * c * c);
}

func smooth_max(x, y, s=1) { # s = smoothing factor
    local c = (MAX($s - abs($x - $y), 0)) / $s;
    return MAX($x, $y) + (($s/6) * c * c * c);
}
