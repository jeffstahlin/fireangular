
// steroids.view.navigationBar.show("Hello World");
  function showQuizzes() {
    var webView = new steroids.views.WebView("/quizapp/fireangular.html");
  }

  function showQuiz(title) {
    var webView = new steroids.views.WebView("/quizapp/quiz.html?quiz=" + title);
    steroids.layers.push(webView);
  }

  function showCatModal() {
    var modalWebView = new steroids.views.WebView("catModal.html");
    steroids.modal.show(modalWebView);
  }
  
  steroids.view.navigationBar.show("Cat Gallery");

  function quizzes() {
    var webView = new steroids.views.WebView("quizzes.html");
    steroids.layers.push(webView);
  }

  function howToPlay() {
    var webView = new steroids.views.WebView("how_to_play.html");
    steroids.layers.push(webView);
  }

  function profiles() {
    var webView = new steroids.views.WebView("profiles.html");
    steroids.layers.push(webView);
  }

  function terms() {
    var webView = new steroids.views.WebView("terms.html");
    steroids.layers.push(webView);
  }

	function show() {
		var webView = new steroids.views.WebView("show.html");
		steroids.layers.push(webView);
	}

	steroids.view.navigationBar.show("Quizztastic");