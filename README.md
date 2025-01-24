# RJIO CSP Unblocker
### RJIO CSP Unblocker is a Chrome extension designed to dynamically resolve Content Security Policy (CSP) issues for the BMC WebUI across multiple IP addresses. This extension ensures seamless interaction with BMC systems by enabling and disabling CSP-related rulesets as needed.

## 🚀 Features
Dynamically update CSP rules to bypass security restrictions.
Toggle rulesets (csp-1, csp-2, csp-3, csp-4) via storage settings.
Automatic handling of icon states (enabled/disabled).
Persistent settings stored locally for user convenience.

## 📦 Installation
Clone the repository to your local machine:

```git clone https://github.com/suyash-jpl/rjio-csp-unblocker.git```

Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode using the toggle in the top-right corner.
Click Load Unpacked and select the cloned repository's directory.
The extension will be added to Chrome.

## 🔧 Usage
Activate/Deactivate Rules:

Click on the extension icon in the Chrome toolbar.
Use the toggle switch in the popup to enable or disable the CSP blocker.
Custom Rules:

Modify the rulesets/csp-*.json files to define or customize specific CSP rules.
Icons:

Active Icon: The extension is enabled and actively modifying CSP rules.
Inactive Icon: The extension is disabled.

## 🛠️ Development
To contribute or make changes to this extension:

Clone the repository:

```git clone https://github.com/suyash-jpl/rjio-csp-unblocker.git```

Edit the files in the _locales/, rulesets/, or data/ folders as needed.
Reload the extension in chrome://extensions after making changes.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing
Fork the repository.
Create a new branch for your feature/bugfix.
Commit your changes and push them to your branch.
Open a pull request for review.
