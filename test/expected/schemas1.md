schema for an fstab entry

The schema defines the following properties:

# `storage` (object, required)

Properties of the `storage` object:

This property must be one of the following types:

* `diskDevice`
* `diskUUID`
* `nfs`
* `tmpfs`

# `fstype` (enum)

The object is an enum, with one of the following required values:

* `ext3`
* `ext4`
* `btrfs`

# `options` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `1`
* Unique items: `true`

# `readonly` (boolean)

---

# Sub Schemas

The schema defines the following additional types:

## `diskDevice` (undefined)

## `diskUUID` (undefined)

## `nfs` (undefined)

## `tmpfs` (undefined)
