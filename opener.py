#ouvrir un navigateur web

import subprocess

chemin_application = '/Applications/chrome.app'

subprocess.call(['open', chemin_application])

#ouvrir un lien dans le navigateur PAR DEFAUT

import webbrowser

webbrowser.open_new_tab("https://goerlifaucet.com/")

#ouvrir un lien dans un navigateur specifique

import webbrowser

url = "https://goerlifaucet.com/"
browser = webbrowser.get("chrome")
browser.open(url)