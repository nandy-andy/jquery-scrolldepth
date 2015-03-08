function getScrollEvents() {
  return $._data(window, 'events') && $._data(window, 'events').scroll;
}

QUnit.test("jQuery scroll depth plugin available and functional", function( assert ) {
  assert.ok( typeof $.scrollDepth === 'function', "scroll depth plugin available" );
});

QUnit.test("scrollDepth minHeight option works as expected", function( assert ) {
  assert.equal(getScrollEvents(), undefined, "no scroll events attached yet");

  $.scrollDepth({
    minHeight: 9999
  });
  assert.equal(getScrollEvents(), undefined, "no scroll events attached because the page is shorter than 9999px");

  $.scrollDepth();
  assert.equal(getScrollEvents()[0].namespace, "scrollDepth", "scrollDepth event attached because minHeight by default is set to 0");
});
