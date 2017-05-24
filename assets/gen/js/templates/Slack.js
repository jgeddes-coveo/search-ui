Coveo.TemplateCache.registerTemplate("CardSlack", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\" style=\"margin-bottom: 20px\">\n    <div class=\"coveo-result-cell\" style=\"width:32px; vertical-align:middle; flex-grow:0\">\n      <img class=\"CoveoThumbnail\" data-no-thumbnail-class=\"coveo-sprites-webpage\" width=\"30px\" height=\"30px\" style=\"border-radius:4px;\"/>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left: 10px; vertical-align: middle;\">\n      <a class=\"CoveoResultLink\"></a>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" data-helper-options-always-include-time=\"true\"></div>\n    </div>\n  </div>\n  <div class=\"CoveoCardActionBar\">\n    <div class=\"CoveoQuickview\"></div>\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\n        <tbody>\n          <tr data-field=\"@author\" data-caption=\"Author\"></tr>\n          <tr data-field=\"@source\" data-caption=\"Source\"></tr>\n          <tr data-field=\"@language\" data-caption=\"Language\"></tr>\n          <tr data-field=\"@date\" data-caption=\"Creation Date\" data-helper=\"date\" />\n          <tr data-field=\"@slackchannelsname\" data-caption=\"Channel\"/>\n          <tr data-field=\"@slackchannelpurposevalue\" data-caption=\"Channel Purpose\"/>\n          <tr data-field=\"@slackchanneltopicvalue\" data-caption=\"Channel Topic\"/>\n          <tr data-field=\"@slackuserrealname\" data-caption=\"Real Name\"/>\n          <tr data-field=\"@slackteamemaildomain\" data-caption=\"Email Domain\"/>\n          <tr data-field=\"@slackteamdomain\" data-caption=\"Domain\"/>\n          <tr data-field=\"@slackparticipatingusers\" data-caption=\"Participating Users\" data-is-multi-value-field=\"true\" data-split-values=\"true\"/>\n          <tr data-field=\"@slackfilesharedchannelsnames\" data-caption=\"Shared Channels\" data-is-multi-value-field=\"true\" data-split-values=\"true\"/>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"CoveoFollowItem\"></div>\n  </div>\n</div>\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"connectortype","values":["SlackCrawler"]}],"mobile":null,"role":null}),true, true)
Coveo.TemplateCache.registerTemplate("Slack", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:7px\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <div class=\"CoveoQuickview\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\n          <table class=\"CoveoFieldTable\">\n            <tbody>\n              <tr data-field=\"@author\" data-caption=\"Author\"></tr>\n              <tr data-field=\"@source\" data-caption=\"Source\"></tr>\n              <tr data-field=\"@language\" data-caption=\"Language\"></tr>\n              <tr data-field=\"@date\" data-caption=\"Creation Date\" data-helper=\"date\" />\n              <tr data-field=\"@slackchannelsname\" data-caption=\"Channel\"/>\n              <tr data-field=\"@slackchannelpurposevalue\" data-caption=\"Channel Purpose\"/>\n              <tr data-field=\"@slackchanneltopicvalue\" data-caption=\"Channel Topic\"/>\n              <tr data-field=\"@slackuserrealname\" data-caption=\"Real Name\"/>\n              <tr data-field=\"@slackteamemaildomain\" data-caption=\"Email Domain\"/>\n              <tr data-field=\"@slackteamdomain\" data-caption=\"Domain\"/>\n              <tr data-field=\"@slackparticipatingusers\" data-caption=\"Participating Users\" data-is-multi-value-field=\"true\" data-split-values=\"true\"/>\n              <tr data-field=\"@slackfilesharedchannelsnames\" data-caption=\"Shared Channels\" data-is-multi-value-field=\"true\" data-split-values=\"true\"/>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"connectortype","values":["SlackCrawler"]}],"mobile":null,"role":null}),true, true)