module.exports = [
  // e.g. FooBar
  /^[A-Z].*/,
  // e.g. fooBar or .fooBar
  /^\.?[a-z0-9].*[A-Z0-9].*/,
  // e.g foo_bar or foo-bar-baz
  /^[a-z]*[-_][a-z]+.*/,
  // e.g. package:melos,
  /^package:.*/,

  // Known words;
  '.dex',
  '&raquo',
  'analytics',
  'acs',
  'apns',
  'aps',
  'async',
  'auth',
  'authenticator',
  'backend',
  'backoff',
  'bool',
  'br',
  'buildscript',
  'cd',
  'chainable',
  'changelog',
  'charset',
  'classpath',
  'classpaths',
  'cocoapods',
  'codelab',
  'config',
  'const',
  'crashlytics',
  'crypto',
  'cryptographically',
  'datastore',
  'deprecations',
  'dex',
  'dropdown',
  'filesystem',
  'firestore',
  'firebase',
  'FlutterFire',
  'getter',
  'getters',
  'globals',
  'gradle',
  'gradlew',
  'href',
  'html',
  'http',
  'img',
  'init',
  'installable',
  'ios',
  'javascript',
  'js',
  'json',
  'keychain',
  'localhost',
  'macos',
  'multidex',
  'natively',
  'passwordless',
  'plist',
  'realtime',
  'reauthenticate',
  'repo',
  'roadmap',
  'scalable',
  'sdk',
  'src',
  'timeframe',
  'twittersdk',
  'unencrypted',
  'unlinked',
  'unlinking',
  'url',
  'verifications',
  'web.firebase_cdn',
  'xml',
  'yaml',
];