costumes "blank.svg";

%include inflator/assert
%include inflator/math

onflag {
    assert_eq MIN(1, 2), 1, "MIN";
    assert_eq MAX(1, 2), 2, "MAX";
    assert_eq RGB(255, 0, 0), 16711680, "RGB";
    assert_eq RGBA(255, 0, 0, 0.5), 25100288, "RGBA";
    assert_eq HEX("FF"), 255, "HEX";
    assert_eq BIN("11111111"), 255, "BIN";
    assert_eq OCT("377"), 255, "OCT";
    assert_eq ACOSH(2), 1.3169578969248166, "ACOSH";
    assert_eq ASINH(2), 1.4436354751788103, "ASINH";
    assert_eq ATANH(0.5), 0.5493061443340549, "ATANH";
    assert_eq COSH(2), 3.7621956910836314, "COSH";
    assert_eq SINH(2), 3.626860407847019, "SINH";
    assert_eq TANH(1), 0.7615941559557649, "TANH";
    assert_eq DIST(0, 0, 1, 1), 1.4142135623730951, "DIST";
    assert_eq POSITIVE_CLAMP(-1), 0, "POSITIVE_CLAMP";
    assert_eq NEGATIVE_CLAMP(1), 0, "NEGATIVE_CLAMP";
    assert_eq CLAMP(1, 0, 2), 1, "CLAMP(1, 0, 2)";
    assert_eq CLAMP(-1, 0, 2), 0, "CLAMP(-1, 0, 2)";
    assert_eq LERP(0, 1, 0.5), 0.5, "LERP";
}
