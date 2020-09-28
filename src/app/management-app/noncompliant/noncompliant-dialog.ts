/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */
var noncompliantDialog = noncompliantDialog || {};
noncompliantDialog.Utils = noncompliantDialog.Utils || {};

(function () {
  /* Modals can open modals. Keep track of them with this array. */
  noncompliantDialog.OpenDialogList =
    noncompliantDialog.OpenDialogList || new Array(0);

  /**
   * @returns the last opened dialog (the current dialog)
   */
  noncompliantDialog.getCurrentDialog = function () {
    if (
      noncompliantDialog.OpenDialogList &&
      noncompliantDialog.OpenDialogList.length
    ) {
      return noncompliantDialog.OpenDialogList[
        noncompliantDialog.OpenDialogList.length - 1
      ];
    }
  };

  noncompliantDialog.closeCurrentDialog = function () {
    const currentDialog = noncompliantDialog.getCurrentDialog();
    if (currentDialog) {
      currentDialog.close();
      return true;
    }

    return false;
  };

  /**
   * @constructor
   * @desc Dialog object.
   *
   * Assumptions: The element serving as the dialog container is present in the
   * DOM and hidden. The dialog container has role='dialog'.
   *
   * @param dialogId
   *          The ID of the element serving as the dialog container.
   */
  noncompliantDialog.Dialog = function (dialogId) {
    this.dialogNode = document.getElementById(dialogId);
    if (this.dialogNode === null) {
      return;
    }

    // Wrap in an individual backdrop element if one doesn't exist
    // Native <dialog> elements use the ::backdrop pseudo-element, which
    // works similarly.
    const backdropClass = "dialog-backdrop";
    if (this.dialogNode.parentNode.classList.contains(backdropClass)) {
      this.backdropNode = this.dialogNode.parentNode;
    } else {
      this.backdropNode = document.createElement("div");
      this.backdropNode.className = backdropClass;
      this.dialogNode.parentNode.insertBefore(
        this.backdropNode,
        this.dialogNode
      );
      this.backdropNode.appendChild(this.dialogNode);
    }
    this.backdropNode.classList.add("active");

    noncompliantDialog.OpenDialogList.push(this);
    this.dialogNode.className = "default_dialog"; // make visible
  }; // end Dialog constructor

  /**
   * @desc
   *  Hides the current top dialog,
   *  removes listeners of the top dialog,
   *  restore listeners of a parent dialog if one was open under the one that just closed,
   *  and sets focus on the element specified for focusAfterClosed.
   */
  noncompliantDialog.Dialog.prototype.close = function () {
    noncompliantDialog.OpenDialogList.pop();
    this.dialogNode.className = "hidden";
    this.backdropNode.classList.remove("active");
  }; // end close

  noncompliantDialog.openDialog = function opennoncompliantDialog(dialogId) {
    new noncompliantDialog.Dialog(dialogId);
  };

  noncompliantDialog.closeDialog = function (closeButton) {
    var topDialog = noncompliantDialog.getCurrentDialog();
    if (topDialog.dialogNode.contains(closeButton)) {
      topDialog.close();
    }
  };
})();
