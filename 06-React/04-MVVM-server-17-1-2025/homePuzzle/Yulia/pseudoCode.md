Define a data structure for accordion items with properties: id, title, and content.

Initialize state 'openItemId' to keep track of the currently open accordion item.

Function 'toggleItem' accepts an item id:
  If 'openItemId' equals the provided id:
    Set 'openItemId' to null (close the item).
  Else:
    Set 'openItemId' to the provided id (open the item).

For each item in the accordion:
  Render a button displaying the item's title.
  Attach an onClick event to the button that calls 'toggleItem' with the item's id.
  If 'openItemId' equals the item's id:
    Display the item's content.