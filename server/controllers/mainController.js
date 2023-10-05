exports.homepage = async (req, res) => {
  const locals = {
    title: "NoteTracker",
    description: "Notes Application.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}

exports.about = async (req, res) => {
  const locals = {
    title: "About - NoteTracker App",
    description: "Free Notes Application.",
  }
  res.render('about', locals);
}