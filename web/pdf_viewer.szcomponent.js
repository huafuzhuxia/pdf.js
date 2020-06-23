/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  AnnotationLayerBuilder,
  DefaultAnnotationLayerFactory,
} from "./annotation_layer_builder.js";
import {
  DefaultTextLayerFactory,
  TextLayerBuilder,
} from "./text_layer_builder.js";
import { EventBus, NullL10n, ProgressBar } from "./ui_utils.js";
import { PDFLinkService, SimpleLinkService } from "./pdf_link_service.js";
import { AppOptions } from "./app_options.js";
import { BasePreferences } from "./preferences.js";
import { DownloadManager } from "./download_manager.js";
import { GenericCom } from "./genericcom.js";
import { GenericL10n } from "./genericl10n.js";
import { OverlayManager } from "./overlay_manager.js";
import { PasswordPrompt } from "./password_prompt.js";
import { PDFAttachmentViewer } from "./pdf_attachment_viewer.js";
import { PDFCursorTools } from "./pdf_cursor_tools.js";
import { PDFDocumentProperties } from "./pdf_document_properties.js";
import { PDFFindBar } from "./pdf_find_bar.js";
import { PDFFindController } from "./pdf_find_controller.js";
import { PDFHistory } from "./pdf_history.js";
import { PDFOutlineViewer } from "./pdf_outline_viewer.js";
import { PDFPageView } from "./pdf_page_view.js";
import { PDFPresentationMode } from "./pdf_presentation_mode.js";
import { PDFSidebarResizer } from "./pdf_sidebar_resizer.js";
import { PDFSinglePageViewer } from "./pdf_single_page_viewer.js";
import { PDFViewer } from "./pdf_viewer.js";
import { PDFViewerApplication } from "./app.js";
import { SecondaryToolbar } from "./secondary_toolbar.js";
import { Toolbar } from "./toolbar.js";
import { ViewHistory } from "./view_history.js";

// eslint-disable-next-line no-unused-vars
const pdfjsVersion = PDFJSDev.eval("BUNDLE_VERSION");
// eslint-disable-next-line no-unused-vars
const pdfjsBuild = PDFJSDev.eval("BUNDLE_BUILD");

export {
  PDFViewer,
  PDFSinglePageViewer,
  PDFPageView,
  PDFLinkService,
  SimpleLinkService,
  TextLayerBuilder,
  DefaultTextLayerFactory,
  AnnotationLayerBuilder,
  DefaultAnnotationLayerFactory,
  PDFHistory,
  PDFFindController,
  EventBus,
  DownloadManager,
  ProgressBar,
  GenericL10n,
  NullL10n,
  AppOptions,
  PDFCursorTools,
  OverlayManager,
  PasswordPrompt,
  PDFAttachmentViewer,
  PDFDocumentProperties,
  PDFFindBar,
  PDFOutlineViewer,
  PDFPresentationMode,
  PDFSidebarResizer,
  SecondaryToolbar,
  Toolbar,
  ViewHistory,
  PDFViewerApplication,
  BasePreferences,
  GenericCom,
};
