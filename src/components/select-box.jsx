import {
  Listbox,
  ListboxLabel,
  ListboxOption,
} from "@/components/base/listbox";

function SelectBox() {
  return (
    <Listbox placeholder="Select status&hellip;" name="status">
      <ListboxOption value="active">
        <ListboxLabel>Active</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="paused">
        <ListboxLabel>Paused</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="delayed">
        <ListboxLabel>Delayed</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="canceled">
        <ListboxLabel>Canceled</ListboxLabel>
      </ListboxOption>
    </Listbox>
  );
}

export default SelectBox;
