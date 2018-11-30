module.exports = {
  'GET /sitecore/api/ssc/scirefapp/sampleitems/588AB906-6191-4545-9566-06988CA6219C/get': function (req, res) {
    res.json({
      "Name": "MySampleItem",
      "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis semper, aliquam mi vitae, rutrum velit. Fusce convallis mi in velit condimentum volutpat. Sed eget massa mauris. Aenean bibendum dolor non augue commodo rhoncus. Aenean id tortor et turpis porttitor porta nec eu mi. Suspendisse vehicula viverra risus, eget eleifend est ullamcorper et. In augue nisl, dignissim sed rutrum vel, fringilla sed velit. Praesent aliquet nulla vitae nisl feugiat, ac bibendum purus malesuada. Ut efficitur justo nisi, eu finibus augue condimentum sed. Maecenas ut magna sem. Curabitur dignissim nibh dolor, eget fringilla dui sagittis vitae. Nam congue luctus quam, in blandit ante consectetur at. Etiam sed malesuada mi. Sed posuere dignissim libero non lacinia. Maecenas ornare nisl eget tellus euismod, et malesuada velit aliquam.",
      "FieldA": "bar",
      "FieldB": "foo"
    });
  },
  'POST /sitecore/api/ssc/scirefapp/sampleitems/588AB906-6191-4545-9566-06988CA6219C/edit': function (req, res) {
    // Hack: Response otherwise throw:
    // [HPM] Error occurred while trying to proxy request <xxx> from <yyy> to <zzz> (ECONNRESET) (https://nodejs.org/api/errors.html#errors_common_system_errors)
    setTimeout(() => {
      res.sendStatus(200);
    }, 0);
  }
};
