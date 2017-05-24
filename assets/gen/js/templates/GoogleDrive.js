Coveo.TemplateCache.registerTemplate("CardGoogleDrive", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width: 32px; vertical-align: middle;\">\n      <div class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"text-align:left; padding-left: 10px; vertical-align: middle;\">\n      <a class=\"CoveoResultLink\"></a>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\" data-color=\"#1D4F76\"></div>\n      <span class=\"CoveoExcerpt\">\n      </span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <div class=\"CoveoText\" data-value=\"Date\" data-weight=\"bold\" data-color=\"#1D4F76\"></div>\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <div class=\"CoveoText\" data-value=\"Author\" data-weight=\"bold\" data-color=\"#1D4F76\"></div>\n      <span class=\"CoveoFieldValue\" data-field=\"@author\"></span>\n    </div>\n  </div>\n  <div class=\"CoveoCardActionBar\">\n    <div class=\"CoveoQuickview\"></div>\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\n        <tbody>\n          <tr data-field=\"@source\" data-caption=\"Source\">\n          </tr>\n          <tr data-field=\"@language\" data-caption=\"Language\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"connectortype","values":["GoogleDriveCrawler"]}],"mobile":null,"role":null}),true, true)
Coveo.TemplateCache.registerTemplate("GoogleDrive", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:7px\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <div class=\"CoveoQuickview\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\n          <table class=\"CoveoFieldTable\">\n            <tbody>\n              <tr data-field=\"@author\" data-caption=\"Author\">\n              </tr>\n              <tr data-field=\"@language\" data-caption=\"Language\">\n              </tr>\n              <tr data-field=\"@filetype\" data-caption=\"Type\">\n              </tr>\n              <tr data-field=\"@gdfilewebcontentlink\" data-caption=\"Download\" data-html-value=\"true\" data-helper=\"anchor\">\n              </tr>\n              <tr data-field=\"@gdfilelastmodifyinguserdisplayname\" data-caption=\"Last Modified By\">\n              </tr>\n              <tr class=\"CoveoValueRow\">\n                <th>\n                  Preview\n                </th>\n                <td>\n                  <img class=\"CoveoThumbnail\" data-no-thumbnail-class='coveo-sprites-custom-small'/>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoPrintableUri\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n      </div>\n    </div>\n  </div>\n</div>",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"connectortype","values":["GoogleDriveCrawler"]}],"mobile":null,"role":null}),true, true)