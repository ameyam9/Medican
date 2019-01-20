import webapp2
import os
import jinja2

jinja_env = jinja2.Environment(
   loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
   extensions=['jinja2.ext.autoescape'],
   autoescape=True)


class WelcomePage(webapp2.RequestHandler):
    def get(self):
        welcome_template = jinja_env.get_template("templates/welcome.html")
        self.response.write(welcome_template.render())

class DataEntryPage(webapp2.RequestHandler):
    def get(self):
        dataentry_template = jinja_env.get_template("templates/data.html")
        self.response.write(dataentry_template.render())

class PillPage(webapp2.RequestHandler):
    def get(self):
        pill_template = jinja_env.get_template("templates/pill.html")
        self.response.write(pill_template.render())




app = webapp2.WSGIApplication([

   ('/', WelcomePage),
   ('/pillentry', PillPage),
   ('/dataentry', DataEntryPage),


], debug=True)
