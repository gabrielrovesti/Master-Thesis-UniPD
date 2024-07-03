## Windows

- Install from chocolatey
> choco install typst

> Compile the file
typst compile thesis.typ

## Ubuntu

Here are the steps to install typst on Ubuntu:

1. Update your package index:

```
sudo apt update
```

2. Install typst using apt:

```
sudo apt install typst
```

3. Verify installation:

```
typst --version
```

This will install the latest version of typst available in the Ubuntu repos.

If you need a newer version than what's available, you can build from source:

1. Install build dependencies: 

```
sudo apt install build-essential pkg-config libunwind-dev
```

2. Download source code:

```
git clone https://github.com/ags131/typst
cd typst
```

3. Build and install:

```
make
sudo make install
```

Now typst should be installed and you can start using it to generate types from Go code. Let me know if you have any other questions!