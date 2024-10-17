# Forall in haskell


Mostly a summarisation of https://stackoverflow.com/questions/3071136/what-does-the-forall-keyword-in-haskell-ghc-do

## ScopedTypeVariables
```haskell
foo :: a -> a -- 1
foo x = go x
    where 
        go :: a -> a -- 2
        go = id
```
1 and 2 are different `a`s unless `foo` is explicitly marked as `forall a`.
This is not the "implicit" forall that everyone speaks of.

## Rank-N-Types
```haskell

```
