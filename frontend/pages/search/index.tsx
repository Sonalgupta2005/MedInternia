import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // Mock search results
    setResults(
      e.target.value
        ? ["Result 1", "Result 2", "Result 3"].filter((item) =>
            item.toLowerCase().includes(e.target.value.toLowerCase())
          )
        : []
    );
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Search Bar */}
      <Paper sx={{ p: 2, mb: 4 }}>
        <TextField
          fullWidth
          label="Search..."
          variant="outlined"
          value={query}
          onChange={handleSearch}
        />
      </Paper>

      {/* Search Results */}
      {results.length > 0 ? (
        <Box display="flex" flexWrap="wrap" gap={2}>
          {results.map((item, index) => (
            <Box key={index} flex="1 1 calc(33.33% - 16px)">
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{item}</Typography>
                <Typography variant="body2">
                  This is a preview of the search result content.
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body1" align="center" color="text.secondary">
          No results found.
        </Typography>
      )}
    </Container>
  );
}
