// ===== DATA =====
const DATA = {
  phases: [
    {id:1,name:'FOUNDATION (SERVER-SIDE)',slug:'foundation',topics:[
      {number:1,name:'SQL INJECTION',slug:'sql-injection',labs:[
        {n:1,t:'SQL injection vulnerability in WHERE clause allowing retrieval of hidden data',d:'Apprentice',u:'https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data'},
        {n:2,t:'SQL injection vulnerability allowing login bypass',d:'Apprentice',u:'https://portswigger.net/web-security/sql-injection/lab-login-bypass'},
        {n:3,t:'SQL injection attack, querying the database type and version on Oracle',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle'},
        {n:4,t:'SQL injection attack, querying the database type and version on MySQL and Microsoft',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft'},
        {n:5,t:'SQL injection attack, listing the database contents on non-Oracle databases',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle'},
        {n:6,t:'SQL injection attack, listing the database contents on Oracle',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle'},
        {n:7,t:'SQL injection UNION attack, determining the number of columns returned by the query',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns'},
        {n:8,t:'SQL injection UNION attack, finding a column containing text',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text'},
        {n:9,t:'SQL injection UNION attack, retrieving data from other tables',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables'},
        {n:10,t:'SQL injection UNION attack, retrieving multiple values in a single column',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column'},
        {n:11,t:'Blind SQL injection with conditional responses',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses'},
        {n:12,t:'Blind SQL injection with conditional errors',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors'},
        {n:13,t:'Visible error-based SQL injection',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/blind/lab-sql-injection-visible-error-based'},
        {n:14,t:'Blind SQL injection with time delays',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/blind/lab-time-delays'},
        {n:15,t:'Blind SQL injection with time delays and information retrieval',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/blind/lab-time-delays-info-retrieval'},
        {n:16,t:'Blind SQL injection with out-of-band interaction',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band'},
        {n:17,t:'Blind SQL injection with out-of-band data exfiltration',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band-data-exfiltration'},
        {n:18,t:'SQL injection with filter bypass via XML encoding',d:'Practitioner',u:'https://portswigger.net/web-security/sql-injection/lab-sql-injection-with-filter-bypass-via-xml-encoding'}
      ]},
      {number:2,name:'AUTHENTICATION',slug:'authentication',labs:[
        {n:1,t:'Username enumeration via different responses',d:'Apprentice',u:'https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses'},
        {n:2,t:'2FA simple bypass',d:'Apprentice',u:'https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-simple-bypass'},
        {n:3,t:'Password reset broken logic',d:'Apprentice',u:'https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-reset-broken-logic'},
        {n:4,t:'Username enumeration via subtly different responses',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-subtly-different-responses'},
        {n:5,t:'Username enumeration via response timing',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-response-timing'},
        {n:6,t:'Broken brute-force protection, IP block',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/password-based/lab-broken-bruteforce-protection-ip-block'},
        {n:7,t:'Username enumeration via account lock',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-account-lock'},
        {n:8,t:'2FA broken logic',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-broken-logic'},
        {n:9,t:'Brute-forcing a stay-logged-in cookie',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/other-mechanisms/lab-brute-forcing-a-stay-logged-in-cookie'},
        {n:10,t:'Offline password cracking',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/other-mechanisms/lab-offline-password-cracking'},
        {n:11,t:'Password reset poisoning via middleware',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-reset-poisoning-via-middleware'},
        {n:12,t:'Password brute-force via password change',d:'Practitioner',u:'https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-brute-force-via-password-change'},
        {n:13,t:'Broken brute-force protection, multiple credentials per request',d:'Expert',u:'https://portswigger.net/web-security/authentication/password-based/lab-broken-brute-force-protection-multiple-credentials-per-request'},
        {n:14,t:'2FA bypass using a brute-force attack',d:'Expert',u:'https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-bypass-using-a-brute-force-attack'}
      ]},
      {number:3,name:'PATH TRAVERSAL',slug:'path-traversal',labs:[
        {n:1,t:'File path traversal, simple case',d:'Apprentice',u:'https://portswigger.net/web-security/file-path-traversal/lab-simple'},
        {n:2,t:'File path traversal, traversal sequences blocked with absolute path bypass',d:'Practitioner',u:'https://portswigger.net/web-security/file-path-traversal/lab-absolute-path-bypass'},
        {n:3,t:'File path traversal, traversal sequences stripped non-recursively',d:'Practitioner',u:'https://portswigger.net/web-security/file-path-traversal/lab-sequences-stripped-non-recursively'},
        {n:4,t:'File path traversal, traversal sequences stripped with superfluous URL-decode',d:'Practitioner',u:'https://portswigger.net/web-security/file-path-traversal/lab-superfluous-url-decode'},
        {n:5,t:'File path traversal, validation of start of path',d:'Practitioner',u:'https://portswigger.net/web-security/file-path-traversal/lab-validate-start-of-path'},
        {n:6,t:'File path traversal, validation of file extension with null byte bypass',d:'Practitioner',u:'https://portswigger.net/web-security/file-path-traversal/lab-validate-file-extension-null-byte-bypass'}
      ]},
      {number:4,name:'OS COMMAND INJECTION',slug:'os-command-injection',labs:[
        {n:1,t:'OS command injection, simple case',d:'Apprentice',u:'https://portswigger.net/web-security/os-command-injection/lab-simple'},
        {n:2,t:'Blind OS command injection with time delays',d:'Practitioner',u:'https://portswigger.net/web-security/os-command-injection/lab-blind-time-delays'},
        {n:3,t:'Blind OS command injection with output redirection',d:'Practitioner',u:'https://portswigger.net/web-security/os-command-injection/lab-blind-output-redirection'},
        {n:4,t:'Blind OS command injection with out-of-band interaction',d:'Practitioner',u:'https://portswigger.net/web-security/os-command-injection/lab-blind-out-of-band'},
        {n:5,t:'Blind OS command injection with out-of-band data exfiltration',d:'Practitioner',u:'https://portswigger.net/web-security/os-command-injection/lab-blind-out-of-band-data-exfiltration'}
      ]},
      {number:5,name:'BUSINESS LOGIC',slug:'business-logic',labs:[
        {n:1,t:'Excessive trust in client-side controls',d:'Apprentice',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-excessive-trust-in-client-side-controls'},
        {n:2,t:'High-level logic vulnerability',d:'Apprentice',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-high-level'},
        {n:3,t:'Inconsistent security controls',d:'Apprentice',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-inconsistent-security-controls'},
        {n:4,t:'Flawed enforcement of business rules',d:'Apprentice',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-flawed-enforcement-of-business-rules'},
        {n:5,t:'Low-level logic flaw',d:'Practitioner',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-low-level'},
        {n:6,t:'Inconsistent handling of exceptional input',d:'Practitioner',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-inconsistent-handling-of-exceptional-input'},
        {n:7,t:'Weak isolation on dual-use endpoint',d:'Practitioner',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-weak-isolation-on-dual-use-endpoint'},
        {n:8,t:'Insufficient workflow validation',d:'Practitioner',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-insufficient-workflow-validation'},
        {n:9,t:'Authentication bypass via flawed state machine',d:'Practitioner',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-authentication-bypass-via-flawed-state-machine'},
        {n:10,t:'Infinite money logic flaw',d:'Practitioner',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-infinite-money'},
        {n:11,t:'Authentication bypass via encryption oracle',d:'Practitioner',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-authentication-bypass-via-encryption-oracle'},
        {n:12,t:'Bypassing access controls using email address parsing discrepancies',d:'Expert',u:'https://portswigger.net/web-security/logic-flaws/examples/lab-logic-flaws-bypassing-access-controls-using-email-address-parsing-discrepancies'}
      ]},
      {number:6,name:'INFORMATION DISCLOSURE',slug:'info-disclosure',labs:[
        {n:1,t:'Information disclosure in error messages',d:'Apprentice',u:'https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-in-error-messages'},
        {n:2,t:'Information disclosure on debug page',d:'Apprentice',u:'https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-on-debug-page'},
        {n:3,t:'Source code disclosure via backup files',d:'Apprentice',u:'https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-via-backup-files'},
        {n:4,t:'Authentication bypass via information disclosure',d:'Apprentice',u:'https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-authentication-bypass'},
        {n:5,t:'Information disclosure in version control history',d:'Practitioner',u:'https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-in-version-control-history'}
      ]},
      {number:7,name:'ACCESS CONTROL',slug:'access-control',labs:[
        {n:1,t:'Unprotected admin functionality',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality'},
        {n:2,t:'Unprotected admin functionality with unpredictable URL',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url'},
        {n:3,t:'User role controlled by request parameter',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter'},
        {n:4,t:'User role can be modified in user profile',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile'},
        {n:5,t:'User ID controlled by request parameter',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter'},
        {n:6,t:'User ID controlled by request parameter, with unpredictable user IDs',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-unpredictable-user-ids'},
        {n:7,t:'User ID controlled by request parameter with data leakage in redirect',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-data-leakage-in-redirect'},
        {n:8,t:'User ID controlled by request parameter with password disclosure',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-password-disclosure'},
        {n:9,t:'Insecure direct object references',d:'Apprentice',u:'https://portswigger.net/web-security/access-control/lab-insecure-direct-object-references'},
        {n:10,t:'URL-based access control can be circumvented',d:'Practitioner',u:'https://portswigger.net/web-security/access-control/lab-url-based-access-control-can-be-circumvented'},
        {n:11,t:'Method-based access control can be circumvented',d:'Practitioner',u:'https://portswigger.net/web-security/access-control/lab-method-based-access-control-can-be-circumvented'},
        {n:12,t:'Multi-step process with no access control on one step',d:'Practitioner',u:'https://portswigger.net/web-security/access-control/lab-multi-step-process-with-no-access-control-on-one-step'},
        {n:13,t:'Referer-based access control',d:'Practitioner',u:'https://portswigger.net/web-security/access-control/lab-referer-based-access-control'}
      ]},
      {number:8,name:'FILE UPLOAD',slug:'file-upload',labs:[
        {n:1,t:'Remote code execution via web shell upload',d:'Apprentice',u:'https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-web-shell-upload'},
        {n:2,t:'Web shell upload via Content-Type restriction bypass',d:'Apprentice',u:'https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-content-type-restriction-bypass'},
        {n:3,t:'Web shell upload via path traversal',d:'Practitioner',u:'https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-path-traversal'},
        {n:4,t:'Web shell upload via extension blacklist bypass',d:'Practitioner',u:'https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-extension-blacklist-bypass'},
        {n:5,t:'Web shell upload via obfuscated file extension',d:'Practitioner',u:'https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-obfuscated-file-extension'},
        {n:6,t:'Remote code execution via polyglot web shell upload',d:'Practitioner',u:'https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-polyglot-web-shell-upload'},
        {n:7,t:'Web shell upload via race condition',d:'Expert',u:'https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-race-condition'}
      ]},
      {number:9,name:'SSRF',slug:'ssrf',labs:[
        {n:1,t:'Basic SSRF against the local server',d:'Apprentice',u:'https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-localhost'},
        {n:2,t:'Basic SSRF against another back-end system',d:'Apprentice',u:'https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-backend-system'},
        {n:3,t:'Blind SSRF with out-of-band detection',d:'Practitioner',u:'https://portswigger.net/web-security/ssrf/blind/lab-out-of-band-detection'},
        {n:4,t:'SSRF with blacklist-based input filter',d:'Practitioner',u:'https://portswigger.net/web-security/ssrf/lab-ssrf-with-blacklist-filter'},
        {n:5,t:'SSRF with filter bypass via open redirection vulnerability',d:'Practitioner',u:'https://portswigger.net/web-security/ssrf/lab-ssrf-filter-bypass-via-open-redirection'},
        {n:6,t:'Blind SSRF with Shellshock exploitation',d:'Expert',u:'https://portswigger.net/web-security/ssrf/blind/lab-shellshock-exploitation'},
        {n:7,t:'SSRF with whitelist-based input filter',d:'Expert',u:'https://portswigger.net/web-security/ssrf/lab-ssrf-with-whitelist-filter'}
      ]},
      {number:10,name:'XXE INJECTION',slug:'xxe-injection',labs:[
        {n:1,t:'Exploiting XXE using external entities to retrieve files',d:'Apprentice',u:'https://portswigger.net/web-security/xxe/lab-exploiting-xxe-to-retrieve-files'},
        {n:2,t:'Exploiting XXE to perform SSRF attacks',d:'Apprentice',u:'https://portswigger.net/web-security/xxe/lab-exploiting-xxe-to-perform-ssrf'},
        {n:3,t:'Blind XXE with out-of-band interaction',d:'Practitioner',u:'https://portswigger.net/web-security/xxe/blind/lab-xxe-with-out-of-band-interaction'},
        {n:4,t:'Blind XXE with out-of-band interaction via XML parameter entities',d:'Practitioner',u:'https://portswigger.net/web-security/xxe/blind/lab-xxe-with-out-of-band-interaction-using-parameter-entities'},
        {n:5,t:'Exploiting blind XXE to exfiltrate data using a malicious external DTD',d:'Practitioner',u:'https://portswigger.net/web-security/xxe/blind/lab-xxe-with-out-of-band-exfiltration'},
        {n:6,t:'Exploiting blind XXE to retrieve data via error messages',d:'Practitioner',u:'https://portswigger.net/web-security/xxe/blind/lab-xxe-with-data-retrieval-via-error-messages'},
        {n:7,t:'Exploiting XInclude to retrieve files',d:'Practitioner',u:'https://portswigger.net/web-security/xxe/lab-xinclude-attack'},
        {n:8,t:'Exploiting XXE via image file upload',d:'Practitioner',u:'https://portswigger.net/web-security/xxe/lab-xxe-via-file-upload'},
        {n:9,t:'Exploiting XXE to retrieve data by repurposing a local DTD',d:'Expert',u:'https://portswigger.net/web-security/xxe/blind/lab-xxe-trigger-error-message-by-repurposing-local-dtd'}
      ]},
      {number:11,name:'NOSQL INJECTION',slug:'nosql-injection',labs:[
        {n:1,t:'Detecting NoSQL injection',d:'Apprentice',u:'https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-detection'},
        {n:2,t:'Exploiting NoSQL operator injection to bypass authentication',d:'Apprentice',u:'https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-bypass-authentication'},
        {n:3,t:'Exploiting NoSQL injection to extract data',d:'Practitioner',u:'https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-extract-data'},
        {n:4,t:'Exploiting NoSQL operator injection to extract unknown fields',d:'Practitioner',u:'https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-extract-unknown-fields'}
      ]},
      {number:12,name:'API TESTING',slug:'api-testing',labs:[
        {n:1,t:'Exploiting an API endpoint using documentation',d:'Apprentice',u:'https://portswigger.net/web-security/api-testing/lab-exploiting-api-endpoint-using-documentation'},
        {n:2,t:'Exploiting server-side parameter pollution in a query string',d:'Practitioner',u:'https://portswigger.net/web-security/api-testing/server-side-parameter-pollution/lab-exploiting-server-side-parameter-pollution-in-query-string'},
        {n:3,t:'Finding and exploiting an unused API endpoint',d:'Practitioner',u:'https://portswigger.net/web-security/api-testing/lab-exploiting-unused-api-endpoint'},
        {n:4,t:'Exploiting a mass assignment vulnerability',d:'Practitioner',u:'https://portswigger.net/web-security/api-testing/lab-exploiting-mass-assignment-vulnerability'},
        {n:5,t:'Exploiting server-side parameter pollution in a REST URL',d:'Expert',u:'https://portswigger.net/web-security/api-testing/server-side-parameter-pollution/lab-exploiting-server-side-parameter-pollution-in-rest-url'}
      ]},
      {number:13,name:'WEB CACHE DECEPTION',slug:'web-cache-deception',labs:[
        {n:1,t:'Exploiting path mapping for web cache deception',d:'Apprentice',u:'https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-path-mapping'},
        {n:2,t:'Exploiting path delimiters for web cache deception',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-path-delimiters'},
        {n:3,t:'Exploiting origin server normalization for web cache deception',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-origin-server-normalization'},
        {n:4,t:'Exploiting cache server normalization for web cache deception',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-cache-server-normalization'},
        {n:5,t:'Exploiting exact-match cache rules for web cache deception',d:'Expert',u:'https://portswigger.net/web-security/web-cache-deception/lab-wcd-exploiting-exact-match-cache-rules'}
      ]},
      {number:14,name:'RACE CONDITIONS',slug:'race-conditions',labs:[
        {n:1,t:'Limit overrun race conditions',d:'Apprentice',u:'https://portswigger.net/web-security/race-conditions/lab-race-conditions-limit-overrun'},
        {n:2,t:'Bypassing rate limits via race conditions',d:'Practitioner',u:'https://portswigger.net/web-security/race-conditions/lab-race-conditions-bypassing-rate-limits'},
        {n:3,t:'Multi-endpoint race conditions',d:'Practitioner',u:'https://portswigger.net/web-security/race-conditions/lab-race-conditions-multi-endpoint'},
        {n:4,t:'Single-endpoint race conditions',d:'Practitioner',u:'https://portswigger.net/web-security/race-conditions/lab-race-conditions-single-endpoint'},
        {n:5,t:'Exploiting time-sensitive vulnerabilities',d:'Practitioner',u:'https://portswigger.net/web-security/race-conditions/lab-race-conditions-exploiting-time-sensitive-vulnerabilities'},
        {n:6,t:'Partial construction race conditions',d:'Expert',u:'https://portswigger.net/web-security/race-conditions/lab-race-conditions-partial-construction'}
      ]}
    ]},
    {id:2,name:'CLIENT-SIDE',slug:'client-side',topics:[
      {number:15,name:'CROSS-SITE SCRIPTING (XSS)',slug:'xss',labs:[
        {n:1,t:'Reflected XSS into HTML context with nothing encoded',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded'},
        {n:2,t:'Stored XSS into HTML context with nothing encoded',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded'},
        {n:3,t:'DOM XSS in document.write sink using source location.search',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink'},
        {n:4,t:'DOM XSS in innerHTML sink using source location.search',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-innerhtml-sink'},
        {n:5,t:'DOM XSS in jQuery anchor href attribute sink using location.search source',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink'},
        {n:6,t:'DOM XSS in jQuery selector sink using a hashchange event',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event'},
        {n:7,t:'Reflected XSS into attribute with angle brackets HTML-encoded',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-attribute-angle-brackets-html-encoded'},
        {n:8,t:'Stored XSS into anchor href attribute with double quotes HTML-encoded',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-href-attribute-double-quotes-html-encoded'},
        {n:9,t:'Reflected XSS into a JavaScript string with angle brackets HTML encoded',d:'Apprentice',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-html-encoded'},
        {n:10,t:'DOM XSS in document.write sink using source location.search inside a select element',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink-inside-select-element'},
        {n:11,t:'DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-angularjs-expression'},
        {n:12,t:'Reflected DOM XSS',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-reflected'},
        {n:13,t:'Stored DOM XSS',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-stored'},
        {n:14,t:'Reflected XSS into HTML context with most tags and attributes blocked',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-most-tags-and-attributes-blocked'},
        {n:15,t:'Reflected XSS into HTML context with all tags blocked except custom ones',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-all-standard-tags-blocked'},
        {n:16,t:'Reflected XSS with some SVG markup allowed',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-some-svg-markup-allowed'},
        {n:17,t:'Reflected XSS in canonical link tag',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-canonical-link-tag'},
        {n:18,t:'Reflected XSS into a JavaScript string with single quote and backslash escaped',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-single-quote-backslash-escaped'},
        {n:19,t:'Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-double-quotes-encoded-single-quotes-escaped'},
        {n:20,t:'Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-onclick-event-angle-brackets-double-quotes-html-encoded-single-quotes-backslash-escaped'},
        {n:21,t:'Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-template-literal-angle-brackets-single-double-quotes-backslash-backticks-escaped'},
        {n:22,t:'Exploiting cross-site scripting to steal cookies',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-stealing-cookies'},
        {n:23,t:'Exploiting cross-site scripting to capture passwords',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-capturing-passwords'},
        {n:24,t:'Exploiting XSS to bypass CSRF defenses',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-perform-csrf'},
        {n:25,t:'Reflected XSS with AngularJS sandbox escape without strings',d:'Expert',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/client-side-template-injection/lab-angular-sandbox-escape-without-strings'},
        {n:26,t:'Reflected XSS with AngularJS sandbox escape and CSP',d:'Expert',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/client-side-template-injection/lab-angular-sandbox-escape-and-csp'},
        {n:27,t:'Reflected XSS with event handlers and href attributes blocked',d:'Expert',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-event-handlers-and-href-attributes-blocked'},
        {n:28,t:'Reflected XSS in a JavaScript URL with some characters blocked',d:'Expert',u:'https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-url-some-characters-blocked'},
        {n:29,t:'Reflected XSS protected by very strict CSP, with dangling markup attack',d:'Practitioner',u:'https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-very-strict-csp-with-dangling-markup-attack'},
        {n:30,t:'Reflected XSS protected by CSP, with CSP bypass',d:'Expert',u:'https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-csp-bypass'}
      ]},
      {number:16,name:'CSRF',slug:'csrf',labs:[
        {n:1,t:'CSRF vulnerability with no defenses',d:'Apprentice',u:'https://portswigger.net/web-security/csrf/lab-no-defenses'},
        {n:2,t:'CSRF where token validation depends on request method',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-validation-depends-on-request-method'},
        {n:3,t:'CSRF where token validation depends on token being present',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-validation-depends-on-token-being-present'},
        {n:4,t:'CSRF where token is not tied to user session',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-not-tied-to-user-session'},
        {n:5,t:'CSRF where token is tied to non-session cookie',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-tied-to-non-session-cookie'},
        {n:6,t:'CSRF where token is duplicated in cookie',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-token-validation/lab-token-duplicated-in-cookie'},
        {n:7,t:'SameSite Lax bypass via method override',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions/lab-samesite-lax-bypass-via-method-override'},
        {n:8,t:'SameSite Strict bypass via client-side redirect',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions/lab-samesite-strict-bypass-via-client-side-redirect'},
        {n:9,t:'SameSite Strict bypass via sibling domain',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions/lab-samesite-strict-bypass-via-sibling-domain'},
        {n:10,t:'SameSite Lax bypass via cookie refresh',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions/lab-samesite-strict-bypass-via-cookie-refresh'},
        {n:11,t:'CSRF where Referer validation depends on header being present',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-referer-based-defenses/lab-referer-validation-depends-on-header-being-present'},
        {n:12,t:'CSRF with broken Referer validation',d:'Practitioner',u:'https://portswigger.net/web-security/csrf/bypassing-referer-based-defenses/lab-referer-validation-broken'}
      ]},
      {number:17,name:'CORS',slug:'cors',labs:[
        {n:1,t:'CORS vulnerability with basic origin reflection',d:'Apprentice',u:'https://portswigger.net/web-security/cors/lab-basic-origin-reflection-attack'},
        {n:2,t:'CORS vulnerability with trusted null origin',d:'Apprentice',u:'https://portswigger.net/web-security/cors/lab-null-origin-whitelisted-attack'},
        {n:3,t:'CORS vulnerability with trusted insecure protocols',d:'Practitioner',u:'https://portswigger.net/web-security/cors/lab-breaking-https-attack'}
      ]},
      {number:18,name:'DOM-BASED VULNERABILITIES',slug:'dom-based',labs:[
        {n:1,t:'DOM XSS using web messages',d:'Practitioner',u:'https://portswigger.net/web-security/dom-based/controlling-the-web-message-source/lab-dom-xss-using-web-messages'},
        {n:2,t:'DOM XSS using web messages and a JavaScript URL',d:'Practitioner',u:'https://portswigger.net/web-security/dom-based/controlling-the-web-message-source/lab-dom-xss-using-web-messages-and-a-javascript-url'},
        {n:3,t:'DOM XSS using web messages and JSON.parse',d:'Practitioner',u:'https://portswigger.net/web-security/dom-based/controlling-the-web-message-source/lab-dom-xss-using-web-messages-and-json-parse'},
        {n:4,t:'DOM-based open redirection',d:'Practitioner',u:'https://portswigger.net/web-security/dom-based/open-redirection/lab-dom-open-redirection'},
        {n:5,t:'DOM-based cookie manipulation',d:'Practitioner',u:'https://portswigger.net/web-security/dom-based/cookie-manipulation/lab-dom-cookie-manipulation'},
        {n:6,t:'Exploiting DOM clobbering to enable XSS',d:'Expert',u:'https://portswigger.net/web-security/dom-based/dom-clobbering/lab-dom-xss-exploiting-dom-clobbering'},
        {n:7,t:'Clobbering DOM attributes to bypass HTML filters',d:'Expert',u:'https://portswigger.net/web-security/dom-based/dom-clobbering/lab-dom-clobbering-attributes-to-bypass-html-filters'}
      ]}
    ]},
    {id:3,name:'ADVANCED',slug:'advanced',topics:[
      {number:19,name:'INSECURE DESERIALIZATION',slug:'insecure-deserialization',labs:[
        {n:1,t:'Modifying serialized objects',d:'Apprentice',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-modifying-serialized-objects'},
        {n:2,t:'Modifying serialized data types',d:'Practitioner',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-modifying-serialized-data-types'},
        {n:3,t:'Using application functionality to exploit insecure deserialization',d:'Practitioner',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-using-application-functionality-to-exploit-insecure-deserialization'},
        {n:4,t:'Arbitrary object injection in PHP',d:'Practitioner',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-arbitrary-object-injection-in-php'},
        {n:5,t:'Exploiting Java deserialization with Apache Commons',d:'Practitioner',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-java-deserialization-with-apache-commons'},
        {n:6,t:'Exploiting PHP deserialization with a pre-built gadget chain',d:'Practitioner',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-php-deserialization-with-a-pre-built-gadget-chain'},
        {n:7,t:'Exploiting Ruby deserialization using a documented gadget chain',d:'Practitioner',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-ruby-deserialization-using-a-documented-gadget-chain'},
        {n:8,t:'Developing a custom gadget chain for Java deserialization',d:'Expert',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-developing-a-custom-gadget-chain-for-java-deserialization'},
        {n:9,t:'Developing a custom gadget chain for PHP deserialization',d:'Expert',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-developing-a-custom-gadget-chain-for-php-deserialization'},
        {n:10,t:'Using PHAR deserialization to deploy a custom gadget chain',d:'Expert',u:'https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-using-phar-deserialization-to-deploy-a-custom-gadget-chain'}
      ]},
      {number:20,name:'WEB LLM ATTACKS',slug:'web-llm-attacks',labs:[
        {n:1,t:'Exploiting LLM APIs with excessive agency',d:'Apprentice',u:'https://portswigger.net/web-security/llm-attacks/lab-exploiting-llm-apis-with-excessive-agency'},
        {n:2,t:'Exploiting vulnerabilities in LLM APIs',d:'Practitioner',u:'https://portswigger.net/web-security/llm-attacks/lab-exploiting-vulnerabilities-in-llm-apis'},
        {n:3,t:'Indirect prompt injection',d:'Practitioner',u:'https://portswigger.net/web-security/llm-attacks/lab-indirect-prompt-injection'},
        {n:4,t:'Exploiting insecure output handling in LLMs',d:'Expert',u:'https://portswigger.net/web-security/llm-attacks/lab-exploiting-insecure-output-handling-in-llms'},
        {n:5,t:'Exploiting AI agents to perform destructive actions',d:'Apprentice',u:'https://portswigger.net/web-security/llm-attacks/ai-powered-scanner-vulnerabilities/lab-indirect-prompt-injection-via-ai-powered-scan'},
        {n:6,t:'Exploiting AI agents to exfiltrate sensitive information',d:'Apprentice',u:'https://portswigger.net/web-security/llm-attacks/ai-powered-scanner-vulnerabilities/lab-sensitive-information-exfiltration'},
        {n:7,t:'Exploiting AI agents to trigger secondary vulnerabilities',d:'Practitioner',u:'https://portswigger.net/web-security/llm-attacks/ai-powered-scanner-vulnerabilities/lab-exploiting-target-website-vulnerabilities-to-bypass-restrictions'},
        {n:8,t:'Bypassing AI scanner defenses to exfiltrate sensitive information',d:'Practitioner',u:'https://portswigger.net/web-security/llm-attacks/ai-powered-scanner-vulnerabilities/lab-bypassing-ai-scanner-defenses-to-exfiltrate-sensitive-information'}
      ]},
      {number:21,name:'GRAPHQL API',slug:'graphql-api',labs:[
        {n:1,t:'Accessing private GraphQL posts',d:'Apprentice',u:'https://portswigger.net/web-security/graphql/lab-graphql-reading-private-posts'},
        {n:2,t:'Accidental exposure of private GraphQL fields',d:'Practitioner',u:'https://portswigger.net/web-security/graphql/lab-graphql-accidental-field-exposure'},
        {n:3,t:'Finding a hidden GraphQL endpoint',d:'Practitioner',u:'https://portswigger.net/web-security/graphql/lab-graphql-find-the-endpoint'},
        {n:4,t:'Bypassing GraphQL brute force protections',d:'Practitioner',u:'https://portswigger.net/web-security/graphql/lab-graphql-brute-force-protection-bypass'},
        {n:5,t:'Performing CSRF exploits over GraphQL',d:'Practitioner',u:'https://portswigger.net/web-security/graphql/lab-graphql-csrf-via-graphql-api'}
      ]},
      {number:22,name:'SERVER-SIDE TEMPLATE INJECTION',slug:'ssti',labs:[
        {n:1,t:'Basic server-side template injection',d:'Practitioner',u:'https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-basic'},
        {n:2,t:'Basic server-side template injection (code context)',d:'Practitioner',u:'https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-basic-code-context'},
        {n:3,t:'Server-side template injection using documentation',d:'Practitioner',u:'https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-using-documentation'},
        {n:4,t:'Server-side template injection in an unknown language with a documented exploit',d:'Practitioner',u:'https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-in-an-unknown-language-with-a-documented-exploit'},
        {n:5,t:'Server-side template injection with information disclosure via user-supplied objects',d:'Practitioner',u:'https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-with-information-disclosure-via-user-supplied-objects'},
        {n:6,t:'Server-side template injection in a sandboxed environment',d:'Expert',u:'https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-in-a-sandboxed-environment'},
        {n:7,t:'Server-side template injection with a custom exploit',d:'Expert',u:'https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-with-a-custom-exploit'}
      ]},
      {number:23,name:'WEB CACHE POISONING',slug:'web-cache-poisoning',labs:[
        {n:1,t:'Web cache poisoning with an unkeyed header',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-with-an-unkeyed-header'},
        {n:2,t:'Web cache poisoning with an unkeyed cookie',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-with-an-unkeyed-cookie'},
        {n:3,t:'Web cache poisoning with multiple headers',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-with-multiple-headers'},
        {n:4,t:'Targeted web cache poisoning using an unknown header',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-targeted-using-an-unknown-header'},
        {n:5,t:'Web cache poisoning via an unkeyed query string',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-unkeyed-query'},
        {n:6,t:'Web cache poisoning via an unkeyed query parameter',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-unkeyed-param'},
        {n:7,t:'Parameter cloaking',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-param-cloaking'},
        {n:8,t:'Web cache poisoning via a fat GET request',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-fat-get'},
        {n:9,t:'URL normalization',d:'Practitioner',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-normalization'},
        {n:10,t:'Web cache poisoning to exploit a DOM vulnerability via a cache with strict cacheability criteria',d:'Expert',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-to-exploit-a-dom-vulnerability-via-a-cache-with-strict-cacheability-criteria'},
        {n:11,t:'Combining web cache poisoning vulnerabilities',d:'Expert',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-design-flaws/lab-web-cache-poisoning-combining-vulnerabilities'},
        {n:12,t:'Cache key injection',d:'Expert',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-cache-key-injection'},
        {n:13,t:'Internal cache poisoning',d:'Expert',u:'https://portswigger.net/web-security/web-cache-poisoning/exploiting-implementation-flaws/lab-web-cache-poisoning-internal'}
      ]},
      {number:24,name:'HTTP HOST HEADER',slug:'http-host-header',labs:[
        {n:1,t:'Basic password reset poisoning',d:'Apprentice',u:'https://portswigger.net/web-security/host-header/exploiting/password-reset-poisoning/lab-host-header-basic-password-reset-poisoning'},
        {n:2,t:'Host header authentication bypass',d:'Apprentice',u:'https://portswigger.net/web-security/host-header/exploiting/lab-host-header-authentication-bypass'},
        {n:3,t:'Web cache poisoning via ambiguous requests',d:'Practitioner',u:'https://portswigger.net/web-security/host-header/exploiting/lab-host-header-web-cache-poisoning-via-ambiguous-requests'},
        {n:4,t:'Routing-based SSRF',d:'Practitioner',u:'https://portswigger.net/web-security/host-header/exploiting/lab-host-header-routing-based-ssrf'},
        {n:5,t:'SSRF via flawed request parsing',d:'Practitioner',u:'https://portswigger.net/web-security/host-header/exploiting/lab-host-header-ssrf-via-flawed-request-parsing'},
        {n:6,t:'Host validation bypass via connection state attack',d:'Practitioner',u:'https://portswigger.net/web-security/host-header/exploiting/lab-host-header-host-validation-bypass-via-connection-state-attack'},
        {n:7,t:'Password reset poisoning via dangling markup',d:'Expert',u:'https://portswigger.net/web-security/host-header/exploiting/password-reset-poisoning/lab-host-header-password-reset-poisoning-via-dangling-markup'}
      ]},
      {number:25,name:'HTTP REQUEST SMUGGLING',slug:'http-request-smuggling',labs:[
        {n:1,t:'HTTP request smuggling, basic CL.TE vulnerability',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/lab-basic-cl-te'},
        {n:2,t:'HTTP request smuggling, basic TE.CL vulnerability',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/lab-basic-te-cl'},
        {n:3,t:'HTTP request smuggling, obfuscating the TE header',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/lab-obfuscating-te-header'},
        {n:4,t:'HTTP request smuggling, confirming a CL.TE vulnerability via differential responses',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/finding/lab-confirming-cl-te-via-differential-responses'},
        {n:5,t:'HTTP request smuggling, confirming a TE.CL vulnerability via differential responses',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/finding/lab-confirming-te-cl-via-differential-responses'},
        {n:6,t:'Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/exploiting/lab-bypass-front-end-controls-cl-te'},
        {n:7,t:'Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/exploiting/lab-bypass-front-end-controls-te-cl'},
        {n:8,t:'Exploiting HTTP request smuggling to reveal front-end request rewriting',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/exploiting/lab-reveal-front-end-request-rewriting'},
        {n:9,t:'Exploiting HTTP request smuggling to capture other users\' requests',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/exploiting/lab-capture-other-users-requests'},
        {n:10,t:'Exploiting HTTP request smuggling to deliver reflected XSS',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/exploiting/lab-deliver-reflected-xss'},
        {n:11,t:'Exploiting HTTP request smuggling to perform web cache poisoning',d:'Expert',u:'https://portswigger.net/web-security/request-smuggling/exploiting/lab-perform-web-cache-poisoning'},
        {n:12,t:'Exploiting HTTP request smuggling to perform web cache deception',d:'Expert',u:'https://portswigger.net/web-security/request-smuggling/exploiting/lab-perform-web-cache-deception'},
        {n:13,t:'Response queue poisoning via H2.TE request smuggling',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/advanced/response-queue-poisoning/lab-request-smuggling-h2-response-queue-poisoning-via-te-request-smuggling'},
        {n:14,t:'H2.CL request smuggling',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-cl-request-smuggling'},
        {n:15,t:'HTTP/2 request smuggling via CRLF injection',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-request-smuggling-via-crlf-injection'},
        {n:16,t:'HTTP/2 request splitting via CRLF injection',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-request-splitting-via-crlf-injection'},
        {n:17,t:'CL.0 request smuggling',d:'Practitioner',u:'https://portswigger.net/web-security/request-smuggling/browser/cl-0/lab-cl-0-request-smuggling'},
        {n:18,t:'Bypassing access controls via HTTP/2 request tunnelling',d:'Expert',u:'https://portswigger.net/web-security/request-smuggling/advanced/request-tunnelling/lab-request-smuggling-h2-bypass-access-controls-via-request-tunnelling'},
        {n:19,t:'Web cache poisoning via HTTP/2 request tunnelling',d:'Expert',u:'https://portswigger.net/web-security/request-smuggling/advanced/request-tunnelling/lab-request-smuggling-h2-web-cache-poisoning-via-request-tunnelling'},
        {n:20,t:'Client-side desync',d:'Expert',u:'https://portswigger.net/web-security/request-smuggling/browser/client-side-desync/lab-client-side-desync'},
        {n:21,t:'Server-side pause-based request smuggling',d:'Expert',u:'https://portswigger.net/web-security/request-smuggling/browser/pause-based-desync/lab-server-side-pause-based-request-smuggling'},
        {n:22,t:'0.CL request smuggling',d:'Expert',u:'https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-0cl-request-smuggling'}
      ]},
      {number:26,name:'JWT',slug:'jwt',labs:[
        {n:1,t:'JWT authentication bypass via unverified signature',d:'Apprentice',u:'https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-unverified-signature'},
        {n:2,t:'JWT authentication bypass via flawed signature verification',d:'Apprentice',u:'https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-flawed-signature-verification'},
        {n:3,t:'JWT authentication bypass via weak signing key',d:'Practitioner',u:'https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-weak-signing-key'},
        {n:4,t:'JWT authentication bypass via jwk header injection',d:'Practitioner',u:'https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-jwk-header-injection'},
        {n:5,t:'JWT authentication bypass via jku header injection',d:'Practitioner',u:'https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-jku-header-injection'},
        {n:6,t:'JWT authentication bypass via kid header path traversal',d:'Practitioner',u:'https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-kid-header-path-traversal'},
        {n:7,t:'JWT authentication bypass via algorithm confusion',d:'Expert',u:'https://portswigger.net/web-security/jwt/algorithm-confusion/lab-jwt-authentication-bypass-via-algorithm-confusion'},
        {n:8,t:'JWT authentication bypass via algorithm confusion with no exposed key',d:'Expert',u:'https://portswigger.net/web-security/jwt/algorithm-confusion/lab-jwt-authentication-bypass-via-algorithm-confusion-with-no-exposed-key'}
      ]},
      {number:27,name:'OAUTH AUTHENTICATION',slug:'oauth',labs:[
        {n:1,t:'Authentication bypass via OAuth implicit flow',d:'Apprentice',u:'https://portswigger.net/web-security/oauth/lab-oauth-authentication-bypass-via-oauth-implicit-flow'},
        {n:2,t:'Forced OAuth profile linking',d:'Practitioner',u:'https://portswigger.net/web-security/oauth/lab-oauth-forced-oauth-profile-linking'},
        {n:3,t:'OAuth account hijacking via redirect_uri',d:'Practitioner',u:'https://portswigger.net/web-security/oauth/lab-oauth-account-hijacking-via-redirect-uri'},
        {n:4,t:'Stealing OAuth access tokens via an open redirect',d:'Practitioner',u:'https://portswigger.net/web-security/oauth/lab-oauth-stealing-oauth-access-tokens-via-an-open-redirect'},
        {n:5,t:'SSRF via OpenID dynamic client registration',d:'Practitioner',u:'https://portswigger.net/web-security/oauth/openid/lab-oauth-ssrf-via-openid-dynamic-client-registration'},
        {n:6,t:'Stealing OAuth access tokens via a proxy page',d:'Expert',u:'https://portswigger.net/web-security/oauth/lab-oauth-stealing-oauth-access-tokens-via-a-proxy-page'}
      ]},
      {number:28,name:'CLICKJACKING',slug:'clickjacking',labs:[
        {n:1,t:'Basic clickjacking with CSRF token protection',d:'Apprentice',u:'https://portswigger.net/web-security/clickjacking/lab-basic-csrf-protected'},
        {n:2,t:'Clickjacking with form input data prefilled from a URL parameter',d:'Apprentice',u:'https://portswigger.net/web-security/clickjacking/lab-prefilled-form-input'},
        {n:3,t:'Clickjacking with a frame buster script',d:'Apprentice',u:'https://portswigger.net/web-security/clickjacking/lab-frame-buster-script'},
        {n:4,t:'Exploiting clickjacking vulnerability to trigger DOM-based XSS',d:'Practitioner',u:'https://portswigger.net/web-security/clickjacking/lab-exploiting-to-trigger-dom-based-xss'},
        {n:5,t:'Multistep clickjacking',d:'Practitioner',u:'https://portswigger.net/web-security/clickjacking/lab-multistep'}
      ]},
      {number:29,name:'WEBSOCKETS',slug:'websockets',labs:[
        {n:1,t:'Manipulating WebSocket messages to exploit vulnerabilities',d:'Apprentice',u:'https://portswigger.net/web-security/websockets/lab-manipulating-messages-to-exploit-vulnerabilities'},
        {n:2,t:'Manipulating the WebSocket handshake to exploit vulnerabilities',d:'Practitioner',u:'https://portswigger.net/web-security/websockets/lab-manipulating-handshake-to-exploit-vulnerabilities'},
        {n:3,t:'Cross-site WebSocket hijacking',d:'Practitioner',u:'https://portswigger.net/web-security/websockets/cross-site-websocket-hijacking/lab'}
      ]},
      {number:30,name:'PROTOTYPE POLLUTION',slug:'prototype-pollution',labs:[
        {n:1,t:'DOM XSS via client-side prototype pollution',d:'Apprentice',u:'https://portswigger.net/web-security/prototype-pollution/client-side/lab-prototype-pollution-dom-xss-via-client-side-prototype-pollution'},
        {n:2,t:'DOM XSS via an alternative prototype pollution vector',d:'Practitioner',u:'https://portswigger.net/web-security/prototype-pollution/client-side/lab-prototype-pollution-dom-xss-via-an-alternative-prototype-pollution-vector'},
        {n:3,t:'Client-side prototype pollution via flawed sanitization',d:'Practitioner',u:'https://portswigger.net/web-security/prototype-pollution/client-side/lab-prototype-pollution-client-side-prototype-pollution-via-flawed-sanitization'},
        {n:4,t:'Client-side prototype pollution in third-party libraries',d:'Practitioner',u:'https://portswigger.net/web-security/prototype-pollution/client-side/lab-prototype-pollution-client-side-prototype-pollution-in-third-party-libraries'},
        {n:5,t:'Client-side prototype pollution via browser APIs',d:'Practitioner',u:'https://portswigger.net/web-security/prototype-pollution/client-side/browser-apis/lab-prototype-pollution-client-side-prototype-pollution-via-browser-apis'},
        {n:6,t:'Privilege escalation via server-side prototype pollution',d:'Practitioner',u:'https://portswigger.net/web-security/prototype-pollution/server-side/lab-privilege-escalation-via-server-side-prototype-pollution'},
        {n:7,t:'Detecting server-side prototype pollution without polluted property reflection',d:'Practitioner',u:'https://portswigger.net/web-security/prototype-pollution/server-side/lab-detecting-server-side-prototype-pollution-without-polluted-property-reflection'},
        {n:8,t:'Bypassing flawed input filters for server-side prototype pollution',d:'Practitioner',u:'https://portswigger.net/web-security/prototype-pollution/server-side/lab-bypassing-flawed-input-filters-for-server-side-prototype-pollution'},
        {n:9,t:'Exfiltrating sensitive data via server-side prototype pollution',d:'Expert',u:'https://portswigger.net/web-security/prototype-pollution/server-side/lab-exfiltrating-sensitive-data-via-server-side-prototype-pollution'},
        {n:10,t:'Remote code execution via server-side prototype pollution',d:'Expert',u:'https://portswigger.net/web-security/prototype-pollution/server-side/lab-remote-code-execution-via-server-side-prototype-pollution'}
      ]},
      {number:31,name:'ESSENTIAL SKILLS',slug:'essential-skills',labs:[
        {n:1,t:'Discovering vulnerabilities quickly with targeted scanning',d:'Practitioner',u:'https://portswigger.net/web-security/essential-skills/using-burp-scanner-during-manual-testing/lab-discovering-vulnerabilities-quickly-with-targeted-scanning'},
        {n:2,t:'Scanning non-standard data structures',d:'Expert',u:'https://portswigger.net/web-security/essential-skills/using-burp-scanner-during-manual-testing/lab-scanning-non-standard-data-structures'}
      ]}
    ]}
  ]
};

// ===== STATE =====
const STORAGE_KEY = 'pwn_tracker_v3';
let currentTopicSlug = null;
let currentFilter = 'all';
let currentSearch = '';
let sidebarOpen = false;

function getCompleted() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveCompleted(set) { localStorage.setItem(STORAGE_KEY, JSON.stringify([...set])); }

function toggleCompleted(url) {
  const s = getCompleted();
  s.has(url) ? s.delete(url) : s.add(url);
  saveCompleted(s);
  return s;
}

function getAllLabs() {
  const r = [];
  for (const p of DATA.phases)
    for (const t of p.topics)
      for (const l of t.labs)
        r.push({...l, topicSlug: t.slug, phaseId: p.id, topicName: t.name});
  return r;
}
const ALL_LABS = getAllLabs();

function getStats() {
  const completed = getCompleted();
  const total = ALL_LABS.length;
  const done = completed.size;
  const pct = total > 0 ? Math.round((done/total)*100) : 0;
  const byDiff = {Apprentice:{t:0,d:0},Practitioner:{t:0,d:0},Expert:{t:0,d:0}};
  for (const l of ALL_LABS) {
    byDiff[l.d].t++;
    if (completed.has(l.u)) byDiff[l.d].d++;
  }
  const byPhase = DATA.phases.map(p => {
    const labs = [];
    for (const t of p.topics) for (const l of t.labs) labs.push(l);
    const d = labs.filter(l => completed.has(l.u)).length;
    return {name: p.name, slug: p.slug, total: labs.length, done: d, pct: Math.round((d/labs.length)*100)};
  });
  const byTopic = [];
  for (const p of DATA.phases)
    for (const t of p.topics) {
      const d = t.labs.filter(l => completed.has(l.u)).length;
      byTopic.push({name: t.name, slug: t.slug, total: t.labs.length, done: d, pct: Math.round((d/t.labs.length)*100), phase: p.name});
    }
  return {total, done, pct, byDiff, byPhase, byTopic};
}

function h(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

// ===== VIEWS =====
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ===== MATRIX RAIN =====
function initMatrix() {
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]|&^%$#@!';
  const fontSize = 14;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(5,8,14,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px monospace`;
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      const brightness = Math.random() * 0.5 + 0.3;
      ctx.fillStyle = `rgba(0,240,255,${brightness * 0.35})`;
      ctx.fillText(char, x, y);
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(draw, 45);
}

// ===== LOADING SCREEN =====
function initLoading() {
  const bar = document.getElementById('loadingBar');
  const screen = document.getElementById('loadingScreen');
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 8 + 2;
    if (pct > 100) pct = 100;
    bar.style.width = pct + '%';
    if (pct >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        screen.classList.add('hidden');
        showView('view-dashboard');
        renderDashboard();
      }, 400);
    }
  }, 120);
}

// ===== TYPEWRITER =====
function typewriter(el, text, speed = 30) {
  el.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(type, speed + Math.random() * 20);
    }
  }
  setTimeout(type, 500);
}

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const initial = parseInt(el.textContent) || 0;
  function update(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(initial + (target - initial) * ease);
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ===== DASHBOARD =====
function renderDashboard() {
  const s = getStats();
  const completed = getCompleted();

  // Update rings
  const circumference = 2 * Math.PI * 52;
  const rings = [
    { id: 'statTotalNum', ring: '#statTotal .ring-fg', target: s.done, max: s.total, label: 'total' },
    { id: 'statApprenticeNum', ring: '#statApprentice .ring-fg', target: s.byDiff.Apprentice.d, max: s.byDiff.Apprentice.t, label: 'apprentice' },
    { id: 'statPractitionerNum', ring: '#statPractitioner .ring-fg', target: s.byDiff.Practitioner.d, max: s.byDiff.Practitioner.t, label: 'practitioner' },
    { id: 'statExpertNum', ring: '#statExpert .ring-fg', target: s.byDiff.Expert.d, max: s.byDiff.Expert.t, label: 'expert' },
  ];

  rings.forEach(r => {
    const numEl = document.getElementById(r.id);
    if (numEl) {
      const currentVal = parseInt(numEl.textContent) || 0;
      animateCounter(numEl, r.target);
    }
    const ringEl = document.querySelector(r.ring);
    if (ringEl) {
      const pct = r.max > 0 ? r.target / r.max : 0;
      const offset = circumference - (pct * circumference);
      setTimeout(() => { ringEl.style.strokeDashoffset = offset; }, 200);
      ringEl.style.strokeDasharray = circumference;
      ringEl.style.strokeDashoffset = circumference;
    }
  });

  document.getElementById('dashStatus').textContent = `connected — ${s.done}/${s.total}`;

  // Typewriter subtitle
  const subtitle = document.getElementById('dashSubtitle');
  const messages = [
    'initializing exploit framework...',
    'loading 274 lab modules...',
    `tracking ${s.done}/${s.total} completed labs`,
    `apprentice: ${s.byDiff.Apprentice.d}/${s.byDiff.Apprentice.t} | practitioner: ${s.byDiff.Practitioner.d}/${s.byDiff.Practitioner.t} | expert: ${s.byDiff.Expert.d}/${s.byDiff.Expert.t}`
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  typewriter(subtitle, msg, 25);

  // Phase cards
  const phasesContainer = document.getElementById('dashPhases');
  let phHtml = '';
  for (const ph of s.byPhase) {
    const color = ph.pct === 100 ? 'var(--green)' : ph.pct > 0 ? 'var(--cyan)' : 'rgba(255,255,255,0.05)';
    const topics = [];
    for (const p of DATA.phases) if (p.name === ph.name) {
      for (const t of p.topics) {
        const td = t.labs.filter(l => completed.has(l.u)).length;
        topics.push({name: t.name, slug: t.slug, done: td, total: t.labs.length});
      }
    }
    phHtml += `<div class="phase-card">
      <div class="phase-card-header" onclick="navigateToLab('${ph.slug === 'foundation' ? 'sql-injection' : ph.slug === 'client-side' ? 'xss' : 'insecure-deserialization'}')">
        <span class="phase-card-title">PHASE ${ph.slug === 'foundation' ? '1' : ph.slug === 'client-side' ? '2' : '3'} — ${h(ph.name)}</span>
        <span class="phase-card-pct">${ph.done}/${ph.total} (${ph.pct}%)</span>
      </div>
      <div class="phase-card-bar"><div class="phase-card-bar-inner" style="width:${ph.pct}%;background:${color}"></div></div>
      <div class="phase-card-topics">`;
    for (const tp of topics) {
      phHtml += `<div class="phase-topic-chip" onclick="navigateToLab('${tp.slug}')">
        <span class="ptc-name">${h(tp.name)}</span>
        <span class="ptc-count">${tp.done}/${tp.total}</span>
      </div>`;
    }
    phHtml += `</div></div>`;
  }
  phasesContainer.innerHTML = phHtml;
}

// ===== TRANSITION =====
function transitionTo(callback) {
  document.body.classList.add('is-transitioning');
  setTimeout(() => {
    callback();
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.body.classList.remove('is-transitioning');
      }, 50);
    });
  }, 700);
}

// ===== NAVIGATION =====
function navigateToLab(slug) {
  transitionTo(() => {
    currentTopicSlug = slug;
    currentFilter = 'all';
    currentSearch = '';
    showView('view-labs');
    renderLabs();
  });
}

function goToDashboard() {
  transitionTo(() => {
    currentTopicSlug = null;
    showView('view-dashboard');
    renderDashboard();
  });
}

// ===== LABS VIEW =====
function renderLabs() {
  if (!currentTopicSlug) {
    // Default to first topic
    currentTopicSlug = 'sql-injection';
  }

  // Find topic
  let foundTopic = null, foundPhase = null;
  for (const p of DATA.phases)
    for (const t of p.topics)
      if (t.slug === currentTopicSlug) { foundTopic = t; foundPhase = p; break; }

  if (!foundTopic) { currentTopicSlug = 'sql-injection'; renderLabs(); return; }

  const completed = getCompleted();

  // Update topbar
  document.getElementById('labsPath').textContent = `~/portswigger/${foundTopic.slug}`;
  document.getElementById('labsPromptCmd').textContent = `ls -la --filter=${currentFilter}`;
  document.getElementById('labsProgressText').textContent = `${completed.size}/${ALL_LABS.length}`;

  // Render sidebar
  renderSidebar(foundTopic.slug);

  // Render main
  renderLabContent(foundTopic, foundPhase, completed);
}

function renderSidebar(activeSlug) {
  const container = document.getElementById('sidebarContent');
  let html = '';
  for (const p of DATA.phases) {
    html += `<div class="sidebar-phase-group"><div class="sidebar-phase-header">PHASE ${p.id}</div>`;
    for (const t of p.topics) {
      const cls = t.slug === activeSlug ? ' active' : '';
      html += `<button class="sidebar-topic-btn${cls}" data-slug="${t.slug}">
        <span>${String(t.number).padStart(2,'0')}. ${h(t.name)}</span>
        <span class="stb-count">${t.labs.length}</span>
      </button>`;
    }
    html += '</div>';
  }
  container.innerHTML = html;
  container.querySelectorAll('.sidebar-topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeSidebar();
      transitionTo(() => {
        currentTopicSlug = btn.dataset.slug;
        currentFilter = 'all';
        currentSearch = '';
        renderLabs();
      });
    });
  });
}

function renderLabContent(topic, phase, completed) {
  const main = document.getElementById('labsMainInner');

  let labs = topic.labs;
  const search = currentSearch.toLowerCase().trim();
  if (search) labs = labs.filter(l => l.t.toLowerCase().includes(search));
  if (currentFilter !== 'all') labs = labs.filter(l => l.d === currentFilter);

  const totalInTopic = topic.labs.length;
  const doneInTopic = topic.labs.filter(l => completed.has(l.u)).length;

  const phaseName = `Phase ${phase.id} — ${phase.name}`;

  let html = `<div class="lab-topic-header">
    <div class="lab-topic-breadcrumb"><span class="ps1">root@pwn</span>:<span class="path">~/portswigger/${topic.slug}</span>$ <span class="cmd">cat README.md</span></div>
    <h1 class="lab-topic-title">${String(topic.number).padStart(2,'0')}. ${h(topic.name)}</h1>
    <div class="lab-topic-meta">
      <span><strong>${totalInTopic}</strong> labs</span>
      <span><strong>${doneInTopic}</strong> done</span>
      <span><strong>${totalInTopic - doneInTopic}</strong> left</span>
      <span>${h(phaseName)}</span>
    </div>
  </div>

  <div class="lab-controls">
    <input class="lab-search" id="labSearch" type="text" placeholder="grep -i 'search...'" value="${h(currentSearch)}">
    <button class="lab-filter-btn${currentFilter === 'all' ? ' active' : ''}" data-f="all">all</button>
    <button class="lab-filter-btn${currentFilter === 'Apprentice' ? ' active' : ''}" data-f="Apprentice">apprentice</button>
    <button class="lab-filter-btn${currentFilter === 'Practitioner' ? ' active' : ''}" data-f="Practitioner">practitioner</button>
    <button class="lab-filter-btn${currentFilter === 'Expert' ? ' active' : ''}" data-f="Expert">expert</button>
    <button class="lab-reset-btn" id="resetTopicLabs">reset</button>
  </div>

  <div class="lab-list">`;

  if (labs.length === 0) {
    html += `<div class="lab-none">// no matching labs found</div>`;
  } else {
    for (const l of labs) {
      const isDone = completed.has(l.u);
      const badgeClass = 'badge-' + l.d.toLowerCase();
      html += `<div class="lab-item${isDone ? ' completed' : ''}">
        <input class="lab-cb" type="checkbox" data-url="${h(l.u)}"${isDone ? ' checked' : ''}>
        <a class="lab-link" href="${h(l.u)}" target="_blank" rel="noopener noreferrer">
          <span class="lab-num-part">${String(l.n).padStart(2,'0')}</span>
          <span class="lab-title-part">${h(l.t)}</span>
          <span class="lab-diff-part lab-badge ${badgeClass}">${l.d}</span>
        </a>
      </div>`;
    }
  }

  html += `</div>`;
  main.innerHTML = html;

  // Search
  const searchBox = document.getElementById('labSearch');
  if (searchBox) {
    searchBox.addEventListener('input', () => {
      currentSearch = searchBox.value;
      renderLabContent(topic, phase, getCompleted());
    });
  }

  // Filters
  main.querySelectorAll('.lab-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.f;
      currentSearch = document.getElementById('labSearch')?.value || '';
      renderLabContent(topic, phase, getCompleted());
    });
  });

  // Checkbox handling
  main.querySelectorAll('.lab-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      toggleCompleted(cb.dataset.url);
      const c = getCompleted();
      document.getElementById('labsProgressText').textContent = `${c.size}/${ALL_LABS.length}`;
      renderLabContent(topic, phase, c);
      renderSidebar(currentTopicSlug);
    });
  });

  // Reset
  const resetBtn = document.getElementById('resetTopicLabs');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const s = getCompleted();
      for (const l of topic.labs) s.delete(l.u);
      saveCompleted(s);
      renderLabContent(topic, phase, getCompleted());
      renderSidebar(currentTopicSlug);
      document.getElementById('labsProgressText').textContent = `${s.size}/${ALL_LABS.length}`;
    });
  }
}

function closeSidebar() {
  document.getElementById('labsSidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
  sidebarOpen = false;
}

function toggleSidebar() {
  const sb = document.getElementById('labsSidebar');
  const ov = document.getElementById('sidebarOverlay');
  sb.classList.toggle('open');
  ov.classList.toggle('active');
  sidebarOpen = sb.classList.contains('open');
}

// ===== SKULL LOGO =====
function initSkullLogo() {
  const svg = '<svg viewBox="0 0 100 100">\
    <path class="skull-outline" d="M50 10 C25 10 10 26 10 48 C10 56 14 62 20 66 L28 78 L28 92 L72 92 L72 78 L80 66 C86 62 90 56 90 48 C90 26 75 10 50 10z" fill="rgba(0,240,255,0.03)" stroke="var(--cyan)" stroke-width="1.5"/>\
    <circle class="skull-eye" cx="33" cy="44" r="9" fill="var(--red)"/>\
    <circle class="skull-eye skull-eye-r" cx="67" cy="44" r="9" fill="var(--red)"/>\
    <polygon points="50,52 46,62 54,62" fill="var(--cyan)" opacity="0.5"/>\
    <line x1="30" y1="72" x2="70" y2="72" stroke="var(--cyan)" stroke-width="1" opacity="0.2"/>\
    <rect x="33" y="74" width="4" height="8" rx="1" fill="var(--cyan)" opacity="0.25"/>\
    <rect x="39" y="74" width="4" height="8" rx="1" fill="var(--cyan)" opacity="0.25"/>\
    <rect x="45" y="74" width="4" height="8" rx="1" fill="var(--cyan)" opacity="0.25"/>\
    <rect x="51" y="74" width="4" height="8" rx="1" fill="var(--cyan)" opacity="0.25"/>\
    <rect x="57" y="74" width="4" height="8" rx="1" fill="var(--cyan)" opacity="0.25"/>\
    <rect x="63" y="74" width="4" height="8" rx="1" fill="var(--cyan)" opacity="0.25"/>\
  </svg>';
  document.querySelectorAll('.skull-logo').forEach(el => {
    el.innerHTML = svg;
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initSkullLogo();
  initMatrix();

  setTimeout(() => {
    initLoading();
  }, 300);

  // Nav
  document.getElementById('enterLabsBtn').addEventListener('click', () => navigateToLab('sql-injection'));
  document.getElementById('backToDashBtn').addEventListener('click', goToDashboard);

  // Sidebar toggle (mobile)
  document.getElementById('labsMenuToggle').addEventListener('click', toggleSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

  // Open sidebar on mobile when clicking a placeholder
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });
});
