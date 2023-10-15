# to open the browser chrome.app

import subprocess

chemin_application = '/Applications/chrome.app'

subprocess.call(['open', chemin_application])

# open a link in chrome.app

import webbrowser

url = "https://signup.live.com/signup"
browser = webbrowser.get("/Applications/chrome.app")
browser.open(url)