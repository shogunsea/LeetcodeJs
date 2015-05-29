numTrees = (n) ->
	count = new Array n + 2
	count[0] = 1
	count[1] = 1
	i = 2
	while i <= n
		j = 0
		while j < i
			left = count[j]
			right = count[i - j - 1]
			cur = if count[i] then count[i] else 0
			count[i] = cur + left * right
			j++
	count[n]	